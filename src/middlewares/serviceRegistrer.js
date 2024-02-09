import authService from "../services/authService.js";
import colorService from "../services/colorService.js";
import userProfileService from "../services/userProfileService.js";
import phoneProductService from "../services/phoneProductService.js";
import userFavouriteProductService from "../services/userFavouriteProductService.js";

async function serviceRegistrer(req, res, next){
    try {
        req.colorService = colorService();
        req.authService = authService();
        req.userProfileService = userProfileService();
        req.phoneProductService = phoneProductService();
        req.userFavouriteProductService = userFavouriteProductService();
        next()
    } catch (error) {
        console.error(error);
    }
}

export default serviceRegistrer