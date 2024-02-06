import asyncHandler from "../middlewares/asyncHandler.js";

const getAllColors = asyncHandler(async function (req, res){
    const response = req.colorService.getAllColors();
    res.status(200).json((await response))
})

const createColor = asyncHandler(async function (req, res){
    const {name} = req.body;
    const response = req.colorService.createColor(name);
    res.status(200).json({data:(await response).dataValues, error:null, success:true})
})
    
export {getAllColors, createColor};