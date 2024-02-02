import asyncHandler from "../middlewares/asyncHandler.js";



const getByUserIdUserProfile = asyncHandler(async function(req, res){
    const userId = parseInt(req.params.userId);
    const response = req.userProfileService.getByUserIdUserProfile(userId);
    res.status(200).json(await response);
});

const createUserProfile = asyncHandler(async function(req, res){
    const createUserProfileDto = req.body;
    const response = req.userProfileService.createUserProfile(createUserProfileDto)
    res.status(200).json(await response)
})
export { getByUserIdUserProfile, createUserProfile }