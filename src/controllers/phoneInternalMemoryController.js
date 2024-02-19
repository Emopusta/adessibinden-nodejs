import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getAllPhoneInternalMemories = asyncHandler(async function (req, res){
    const response = await req.phoneInternalMemoryService.getAllPhoneInternalMemories();
    res.status(200).json(successDataResult(response))
})
    
export { getAllPhoneInternalMemories };