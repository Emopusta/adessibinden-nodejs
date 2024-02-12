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
        return await UserProfile.findOne({where: {UserId:userId}});
    }

    export default function userProfileService(){
        return Object.freeze({
            getByUserIdUserProfile,
            createUserProfile,
        })
    }
