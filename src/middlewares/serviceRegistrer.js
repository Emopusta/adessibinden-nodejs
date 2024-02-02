import { getAllColors, createColor } from "../services/colorService.js";
import { registerUser, logoutUser, getUserWithEmail, verifyPassword, createRefreshToken } from "../services/authService.js";
import { getByUserIdUserProfile, createUserProfile } from "../services/userProfileService.js"

function colorService(){
    return Object.freeze({
        getAllColors,
        createColor,
    })
}

function authService(){
    return Object.freeze({
        registerUser,
        getUserWithEmail,
        logoutUser,
        verifyPassword,
        createRefreshToken,
    })
}

function userProfileService(){
    return Object.freeze({
        getByUserIdUserProfile,
        createUserProfile,
    })
}

async function serviceRegistrer(req, res, next){

    try {
        req.colorService = colorService();
        req.authService = authService();
        req.userProfileService = userProfileService();
        next()
    } catch (error) {
        console.error(error);
    }

}


export default serviceRegistrer