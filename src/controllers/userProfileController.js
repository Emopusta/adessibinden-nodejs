import asyncHandler from "../middlewares/asyncHandler.js";
import successDataResult from "../utils/successDataResult.js";

const getByUserIdUserProfile = asyncHandler(async function(req, res){
    const userId = req.query.UserId;
    const response = await req.userProfileService.getByUserIdUserProfile(userId);
    res.status(200).json(successDataResult(response));
});

const createUserProfile = asyncHandler(async function(req, res){
    const createUserProfileDto = req.body;
    const response = await req.userProfileService.createUserProfile(createUserProfileDto)
    res.status(200).json(successDataResult(response))
})

const updateUserProfile = asyncHandler(async function(req, res){
    const updateUserProfileDto = req.body;
    const response = await req.userProfileService.updateUserProfile(updateUserProfileDto)
    res.status(200).json(successDataResult(response))
})

export { getByUserIdUserProfile, createUserProfile, updateUserProfile }