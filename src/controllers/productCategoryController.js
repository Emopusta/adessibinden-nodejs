import asyncHandler from "../middlewares/asyncHandler.js";

const getAllProductCategories = asyncHandler(async function (req, res){
    const response = req.productCategoryService.getAllProductCategories();
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})
    
export { getAllProductCategories };