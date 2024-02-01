import Hashes from "jshashes";
import User from "../models/userModel.js";
import RefreshToken from "../models/refreshTokenModel.js";


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
            where: {Email: email}
        });
        
        return user

    }

    export async function createRefreshToken(user, ipAddress){
        const currentUtcDate = new Date();
        const newDate = new Date(currentUtcDate);
        newDate.setUTCDate(newDate.getUTCDate() + 7);

        const refreshToken = await RefreshToken.create(
            {
                UserId: user.Id,
                Token: randomRefreshToken(), 
                Expires: newDate,
                CreatedByIp: ipAddress
            });

        return refreshToken;
    }

    export function randomRefreshToken(){
        const numberByte = new Uint8Array(32);
        crypto.getRandomValues(numberByte);
        return btoa(String.fromCharCode.apply(null, numberByte));
    }

    export async function logoutUser(){

        return {message: "Logged Out."};
    }
