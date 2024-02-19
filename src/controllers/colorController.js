import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getAllColors = asyncHandler(async function (req, res){
    const response = await req.colorService.getAllColors();
    res.status(200).json(successDataResult(response))
})

const createColor = asyncHandler(async function (req, res){
    const {name} = req.body;
    const response = await req.colorService.createColor(name);
    res.status(200).json(successDataResult(response))
})
    
export {getAllColors, createColor};