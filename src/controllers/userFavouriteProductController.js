import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getByUserIdUserFavouriteProduct = asyncHandler(async function(req, res){
    const userId = req.query.UserId;
    const response = await req.userFavouriteProductService.getByUserIdUserFavouriteProduct(userId);
    res.status(200).json(successDataResult(response))
})

const getByProductAndUserIdUserFavouriteProduct = asyncHandler(async function(req, res){
    const userId = req.query.UserId;
    const productId = req.query.ProductId;
    const response = await req.userFavouriteProductService.getByProductAndUserIdUserFavouriteProduct(userId, productId);
    res.status(200).json(successDataResult(response))
})

const deleteUserFavouriteProduct = asyncHandler(async function(req, res){
    const userId = parseInt(req.params.userId);
    const productId = parseInt(req.params.productId);
    const response = await req.userFavouriteProductService.deleteUserFavouriteProduct(userId, productId);
    res.status(200).json(successDataResult(response))
})

const addUserFavouriteProduct = asyncHandler(async function(req, res){
    const {userId, productId} = req.body;
    const response = await req.userFavouriteProductService.addUserFavouriteProduct(userId, productId);
    res.status(200).json(successDataResult(response))
})

export { getByUserIdUserFavouriteProduct, getByProductAndUserIdUserFavouriteProduct, deleteUserFavouriteProduct, addUserFavouriteProduct }