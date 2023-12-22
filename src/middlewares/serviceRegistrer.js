import { getAllColors, createColor } from "../services/colorService.js";
import { registerUser, logoutUser, getUserWithEmail, verifyPassword } from "../services/authService.js";

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
        verifyPassword
    })
}

async function serviceRegistrer(req, res, next){

    try {
        req.colorService = colorService();
        req.authService = authService();
        next()
    } catch (error) {
        console.error(error);
    }

}


export default serviceRegistrer