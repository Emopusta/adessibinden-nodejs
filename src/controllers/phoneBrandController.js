import asyncHandler from "../middlewares/asyncHandler.js";

const getAllPhoneBrands = asyncHandler(async function (req, res){
    const response = req.phoneBrandService.getAllPhoneBrands();
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})
    
export { getAllPhoneBrands };