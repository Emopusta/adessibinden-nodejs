import authService from "../services/authService.js";
import colorService from "../services/colorService.js";
import userProfileService from "../services/userProfileService.js";
import phoneProductService from "../services/phoneProductService.js";
import userFavouriteProductService from "../services/userFavouriteProductService.js";
import productCategoryService from "../services/productCategoryService.js";
import phoneBrandService from "../services/phoneBrandService.js";
import phoneInternalMemoryService from "../services/phoneInternalMemoryService.js";

async function serviceRegistrer(req, res, next){
    try {
        req.colorService = colorService();
        req.authService = authService();
        req.userProfileService = userProfileService();
        req.phoneProductService = phoneProductService();
        req.userFavouriteProductService = userFavouriteProductService();
        req.productCategoryService = productCategoryService();
        req.phoneBrandService = phoneBrandService();
        req.phoneInternalMemoryService = phoneInternalMemoryService();
        next()
    } catch (error) {
        console.error(error);
    }
}

export default serviceRegistrer