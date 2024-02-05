import UserProfile from "../models/userProfileModel.js"

    function createUserProfile(createUserProfileDto){
        const {userId, firstName, lastName, address, birthDate} = createUserProfileDto;
        return UserProfile.create({
            UserId:userId ,
            FirstName:firstName, 
            LastName:lastName,  
            Address:address, 
            BirthDate:birthDate
           })
    }
     
    function getByUserIdUserProfile(userId){
        return UserProfile.findOne({where: {UserId:userId}});
    }



    export default function userProfileService(){
        return Object.freeze({
            getByUserIdUserProfile,
            createUserProfile,
        })
    }
