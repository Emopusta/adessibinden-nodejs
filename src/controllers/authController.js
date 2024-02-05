import asyncHandler from "../middlewares/asyncHandler.js";
import RefreshToken from "../models/refreshTokenModel.js";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import { generateToken } from "../utils/generateToken.js";

const register = asyncHandler(async function (req, res){
    const {email, password} = req.body
    const response = req.authService.registerUser(email, password);
    const userProfile = req.userProfileService.createUserProfile({userId: (await response).dataValues.Id})
    res.status(200).json((await response))
})

const login = asyncHandler(async function (req, res, next){
            const {email, password} = req.body
            const validUser = await req.authService.getUserWithEmail(email, password); 
            if (!validUser) throw new errorHandler(404, "User not found!");
            
            const validPassword = await req.authService.verifyPassword(password, validUser.PasswordHash, validUser.PasswordSalt)
            if (!validPassword) throw new errorHandler(401, "Wrong Password");

            
            const refreshToken = await req.authService.createRefreshToken(validUser, req.connection.remoteAddress);
            res.cookie("refresh-token", refreshToken.Token, {
                httpOnly: true
            })
            
            const accessToken = generateToken(res, (await validUser).dataValues.Id, email)
            
            
            const addSevenDays = 24*7*3600000
            const expireDate = new Date(Date.now() + addSevenDays);

            res.cookie("access-token", accessToken, {
                httpOnly: true, expires: expireDate
            })

            res.status(200).json({data:{accessToken:{token:accessToken, expiration: expireDate}}, error:null, success:true})  
})


const logout = asyncHandler(async function (req, res){
    res.clearCookie("refresh-token", {
                httpOnly: true
            });
    res.clearCookie("access-token", {
        httpOnly: true
    });        
    const response = req.authService.logoutUser();
    res.status(200).json((await response))
})

const refreshToken = asyncHandler(async function(req, res){
    
    var refreshTokenFromCookies = req.cookies['refresh-token']
    
    const refreshToken = await RefreshToken.findOne({where: {Token:refreshTokenFromCookies}})

    const user = await User.findOne({where: {Id:refreshToken.UserId}})

    const newRefreshToken = await req.authService.createRefreshToken(user, req.connection.remoteAddress);
    res.cookie("refresh-token", newRefreshToken.Token, {
        httpOnly: true
    })

    var accessToken = generateToken(res, user.dataValues.Id, user.dataValues.email)

    const currentDate = new Date();
    const expireDate = new Date(currentDate);
    expireDate.setDate(currentDate.getDate() + 7);

    res.status(200).json({data:{accessToken:{token:accessToken, expiration: expireDate}}, error:null, success:true});
})

export {register, login, logout, refreshToken};