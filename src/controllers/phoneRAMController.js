import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getAllPhoneRAMs = asyncHandler(async function (req, res){
    const response = await req.phoneRAMService.getAllPhoneRAMs();
    res.status(200).json(successDataResult(response))
})
    
export { getAllPhoneRAMs };