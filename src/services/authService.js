import Hashes from "jshashes";
import User from "../models/userModel.js";

    export function registerUser(email, password){
        const hmac = new Hashes.SHA512;
        const passwordSalt = hmac.hex(password+email)
        const passwordHash = hmac.hex_hmac(passwordSalt, password);
        return User.create({Email:email, PasswordHash:passwordHash, PasswordSalt:passwordSalt});
    }

    export async function verifyPassword(password, hash, salt){
        const hmac = new Hashes.SHA512
        const verify = hmac.hex_hmac(salt, password)

        return hash == verify ? true : false;
    
    }


    export async function getUserWithEmail(email){
        
        const user = await User.findOne({
            where: {email: email}
        });
        
        return user

    }
    export async function logoutUser(){

        return {message: "Logged Out."};
    }
