import asyncHandler from "../middlewares/asyncHandler.js";

const getAllPhoneInternalMemories = asyncHandler(async function (req, res){
    const response = req.phoneInternalMemoryService.getAllPhoneInternalMemories();
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})
    
export { getAllPhoneInternalMemories };