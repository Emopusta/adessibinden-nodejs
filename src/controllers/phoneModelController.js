import asyncHandler from "../middlewares/asyncHandler.js";

const getByBrandIdPhoneModel = asyncHandler(async function (req, res){
    const brandId = req.query.BrandId;
    const response = req.phoneModelService.getByBrandIdPhoneModel(brandId);
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})
    
export { getByBrandIdPhoneModel };