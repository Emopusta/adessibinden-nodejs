import asyncHandler from "../middlewares/asyncHandler.js";
import RefreshToken from "../models/refreshTokenModel.js";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import { generateToken } from "../utils/generateToken.js";
import successDataResult from "../utils/successDataResult.js";

const register = asyncHandler(async function (req, res){
    const {email, password} = req.body
    const response = await req.authService.registerUser(email, password);
    const userProfile = req.userProfileService.createUserProfile({userId: (await response).dataValues.Id})
    res.status(200).json(successDataResult(response))
})

const login = asyncHandler(async function (req, res, next){
    const {email, password} = req.body
    const validUser = await req.authService.getUserWithEmail(email, password); 
    if (!validUser) throw new errorHandler(404, "User not found!");
    
    const validPassword = await req.authService.verifyPassword(password, validUser.PasswordHash, validUser.PasswordSalt)
    if (!validPassword) throw new errorHandler(400, "Wrong Password");

    
    const refreshToken = await req.authService.createRefreshToken(validUser, req.connection.remoteAddress);
    res.cookie("refresh-token", refreshToken.Token, {
        httpOnly: true
    })
    
    const tokenResponse = await generateToken(req, res, (await validUser).dataValues.Id, email)

    res.status(200).json(successDataResult(tokenResponse))  
})

const logout = asyncHandler(async function (req, res){
    res.clearCookie("refresh-token", {
                httpOnly: true
            });
     
    const response = req.authService.logoutUser();
    res.status(200).json(successDataResult(await response))
})

const refreshToken = asyncHandler(async function(req, res){
    
    var refreshTokenFromCookies = req.cookies['refresh-token']
    
    const refreshToken = await RefreshToken.findOne({where: {Token:refreshTokenFromCookies}})
    const user = await User.findOne({where: {Id:refreshToken.UserId}})

    const newRefreshToken = await req.authService.createRefreshToken(user, req.connection.remoteAddress);
    res.cookie("refresh-token", newRefreshToken.Token, {
        httpOnly: true
    })

    var accessToken = await generateToken(req, res, user.dataValues.Id, user.dataValues.email)

    res.status(200).json(successDataResult(accessToken));
})

export {register, login, logout, refreshToken};