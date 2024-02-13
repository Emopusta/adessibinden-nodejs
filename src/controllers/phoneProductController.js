import asyncHandler from "../middlewares/asyncHandler.js";

const getPhoneProductByProductId = asyncHandler(async function(req, res){
    const productId = req.query.ProductId;
    const response = req.phoneProductService.getPhoneProductByProductId(productId);
    res.status(200).json({data:(await response), error:null, success:true})
})

const getByIdDetailsForUpdatePhoneProduct = asyncHandler(async function(req, res){
    const productId = req.query.ProductId;
    const response = req.phoneProductService.getByIdDetailsForUpdatePhoneProduct(productId);
    res.status(200).json({data:(await response), error:null, success:true})
})

export { getPhoneProductByProductId, getByIdDetailsForUpdatePhoneProduct }