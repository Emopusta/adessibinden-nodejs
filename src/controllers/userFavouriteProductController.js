import asyncHandler from "../middlewares/asyncHandler.js";

const getByUserIdUserFavouriteProduct = asyncHandler(async function(req, res){
    const userId = parseInt(req.params.userId);
    const response = req.userFavouriteProductService.getByUserIdUserFavouriteProduct(userId);
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})

export { getByUserIdUserFavouriteProduct }