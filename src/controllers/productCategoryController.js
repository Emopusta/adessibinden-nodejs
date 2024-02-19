import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getAllProductCategories = asyncHandler(async function (req, res){
    const response = await req.productCategoryService.getAllProductCategories();
    res.status(200).json(successDataResult(response))
})
    
export { getAllProductCategories };