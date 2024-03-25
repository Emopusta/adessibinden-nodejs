import UserProfile from "../models/userProfileModel.js"

    async function createUserProfile(createUserProfileDto){
        const {userId, firstName, lastName, address, birthDate} = createUserProfileDto;
        return await UserProfile.create({
            UserId:userId ,
            FirstName:firstName, 
            LastName:lastName,  
            Address:address, 
            BirthDate:birthDate
           })
    }
     
    async function getByUserIdUserProfile(userId){
        return await UserProfile.findOne({where: {UserId:userId , DeletedDate : null}});
    }

    async function updateUserProfile(updateUserProfileDto){
        
        const userProfile = await UserProfile.findOne({where: { UserId:updateUserProfileDto.userId, DeletedDate : null }});
        userProfile.UserId = updateUserProfileDto.userId;
        userProfile.FirstName = updateUserProfileDto.firstName;
        userProfile.LastName = updateUserProfileDto.lastName;
        userProfile.Address = updateUserProfileDto.address;
        userProfile.BirthDate = updateUserProfileDto.birthDate;
        userProfile.save();
    
        return userProfile;
    }

    export default function userProfileService(){
        return Object.freeze({
            getByUserIdUserProfile,
            createUserProfile,
            updateUserProfile,
        })
    }
