import authService from "../services/authService.js";
import colorService from "../services/colorService.js";
import userProfileService from "../services/userProfileService.js";
import phoneProductService from "../services/phoneProductService.js";

async function serviceRegistrer(req, res, next){

    try {
        req.colorService = colorService();
        req.authService = authService();
        req.userProfileService = userProfileService();
        req.phoneProductService = phoneProductService();
        next()
    } catch (error) {
        console.error(error);
    }

}

export default serviceRegistrer