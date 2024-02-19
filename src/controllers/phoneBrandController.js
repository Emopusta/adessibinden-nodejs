import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getAllPhoneBrands = asyncHandler(async function (req, res){
    const response = await req.phoneBrandService.getAllPhoneBrands();
    res.status(200).json(successDataResult(response))
})
    
export { getAllPhoneBrands };