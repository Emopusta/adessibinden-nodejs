import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getByBrandIdPhoneModel = asyncHandler(async function (req, res){
    const brandId = req.query.BrandId;
    const response = await req.phoneModelService.getByBrandIdPhoneModel(brandId);
    res.status(200).json(successDataResult(response))
})
    
export { getByBrandIdPhoneModel };