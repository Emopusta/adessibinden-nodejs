import UserProfile from "../models/userProfileModel.js"

    export function createUserProfile(createUserProfileDto){
        const {userId, firstName, lastName, address, birthDate} = createUserProfileDto;
        return UserProfile.create({
            UserId:userId ,
            FirstName:firstName, 
            LastName:lastName,  
            Address:address, 
            BirthDate:birthDate
           })
    }
     
    export function getByUserIdUserProfile(userId){
        return UserProfile.findOne({where: {UserId:userId}});
    }


