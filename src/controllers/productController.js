import asyncHandler from "../middlewares/asyncHandler.js";

const getAllProducts = asyncHandler(async function (req, res){
    const response = req.productService.getAllProducts();
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})

const getByCreatorUserIdProducts = asyncHandler(async function (req, res){
    const creatorUserId = req.query.CreatorUserId;
    const response = req.productService.getByCreatorUserIdProducts(creatorUserId);
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})
export { getAllProducts, getByCreatorUserIdProducts };