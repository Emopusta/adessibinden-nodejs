import asyncHandler from "../middlewares/asyncHandler.js";

const getPhoneProductByProductId = asyncHandler(async function(req, res){
    const productId = parseInt(req.params.productId);
    const response = req.phoneProductService.getPhoneProductByProductId(productId);
    res.status(200).json({data:(await response), error:null, success:true})
})


export { getPhoneProductByProductId }