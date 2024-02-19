import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getAllProducts = asyncHandler(async function (req, res){
    const response = req.productService.getAllProducts();
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
    res.status(200).json(successDataResult(await response))
})

const getByCreatorUserIdProducts = asyncHandler(async function (req, res){
    const creatorUserId = req.query.CreatorUserId;
    const response = req.productService.getByCreatorUserIdProducts(creatorUserId);
    res.status(200).json(successDataResult(await response))
})

const getByTitleProducts = asyncHandler(async function (req, res){
    const productTitleToSearch = req.query.productTitleToSearch;
    const response = req.productService.getByTitleProducts(productTitleToSearch);
    res.status(200).json(successDataResult(await response))
})

export { getAllProducts, getByCreatorUserIdProducts, getByTitleProducts };