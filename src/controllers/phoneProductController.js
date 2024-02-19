import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const createPhoneProduct = asyncHandler(async function(req, res){
    const createPhoneProductDto = req.body;
    const response = await req.phoneProductService.createPhoneProduct(createPhoneProductDto);
    res.status(200).json(successDataResult(response))
})

const getPhoneProductByProductId = asyncHandler(async function(req, res){
    const productId = req.query.ProductId;
    const response = await req.phoneProductService.getPhoneProductByProductId(productId);
    res.status(200).json(successDataResult(response))
})

const getByIdDetailsForUpdatePhoneProduct = asyncHandler(async function(req, res){
    const productId = req.query.ProductId;
    const response = await req.phoneProductService.getByIdDetailsForUpdatePhoneProduct(productId);
    res.status(200).json(successDataResult(response))
})

const deletePhoneProduct = asyncHandler(async function(req, res){
    const productId = req.params.ProductId;
    const response = await req.phoneProductService.deletePhoneProduct(productId);
    res.status(200).json(successDataResult(response))
})

const updatePhoneProduct = asyncHandler(async function(req, res){
    const updatePhoneProductDto = req.body;
    const response = await req.phoneProductService.updatePhoneProduct(updatePhoneProductDto);
    res.status(200).json(successDataResult(response))
})

export { getPhoneProductByProductId, getByIdDetailsForUpdatePhoneProduct, deletePhoneProduct, updatePhoneProduct, createPhoneProduct }