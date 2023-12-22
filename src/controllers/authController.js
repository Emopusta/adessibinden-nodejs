import asyncHandler from "../middlewares/asyncHandler.js";
import { errorHandler } from "../utils/errorHandler.js";
import { generateToken } from "../utils/generateToken.js";

const register = asyncHandler(async function (req, res){
    const {email, password} = req.body
    const response = req.authService.registerUser(email, password);
    res.status(400).json((await response))
})

const login = asyncHandler(async function (req, res){
            const {email, password} = req.body
            const validUser = await req.authService.getUserWithEmail(email, password); 
            if (!validUser) throw new errorHandler(404, "User not found!");

            const validPassword = await req.authService.verifyPassword(password, validUser.passwordHash, validUser.passwordSalt)
            if (!validPassword) throw new errorHandler(401, "Wrong Password");

            generateToken(res, validUser.id)
            const{ passwordHash:passHash, passwordSalt:passSalt, ...rest } = validUser.dataValues;
            res.status(200).json({rest})  
})


const logout = asyncHandler(async function (req, res){
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    const response = req.authService.logoutUser();
    res.status(400).json((await response))
})

export {register, login, logout};