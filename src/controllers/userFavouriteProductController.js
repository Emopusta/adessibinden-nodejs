import asyncHandler from "../middlewares/asyncHandler.js";

const getByUserIdUserFavouriteProduct = asyncHandler(async function(req, res){
    const userId = req.query.UserId;
    const response = req.userFavouriteProductService.getByUserIdUserFavouriteProduct(userId);
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})

const getByProductAndUserIdUserFavouriteProduct = asyncHandler(async function(req, res){
    const userId = req.query.UserId;
    const productId = req.query.ProductId;
    const response = req.userFavouriteProductService.getByProductAndUserIdUserFavouriteProduct(userId, productId);
    res.status(200).json({data:(await response), error:null, success:true})
})

const deleteUserFavouriteProduct = asyncHandler(async function(req, res){
    const userId = parseInt(req.params.userId);
    const productId = parseInt(req.params.productId);
    const response = req.userFavouriteProductService.deleteUserFavouriteProduct(userId, productId);
    res.status(200).json({data:(await response), error:null, success:true})
})

const addUserFavouriteProduct = asyncHandler(async function(req, res){
    const {userId, productId} = req.body;
    const response = req.userFavouriteProductService.addUserFavouriteProduct(userId, productId);
    res.status(200).json({data:(await response), error:null, success:true})
})

export { getByUserIdUserFavouriteProduct, getByProductAndUserIdUserFavouriteProduct, deleteUserFavouriteProduct, addUserFavouriteProduct }