import asyncHandler from "../middlewares/asyncHandler.js";

const getAllPhoneRAMs = asyncHandler(async function (req, res){
    const response = req.phoneRAMService.getAllPhoneRAMs();
    res.status(200).json({data:{items:(await response)}, error:null, success:true})
})
    
export { getAllPhoneRAMs };