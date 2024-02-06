import Hashes from "jshashes";
import User from "../models/userModel.js";
import RefreshToken from "../models/refreshTokenModel.js";

    function registerUser(email, password){
        const hmac = new Hashes.SHA512;
        const passwordSalt = hmac.hex(password+email)
        const passwordHash = hmac.hex_hmac(passwordSalt, password);
        return User.create({Email:email, PasswordHash:passwordHash, PasswordSalt:passwordSalt});
    }

    async function verifyPassword(password, hash, salt){
        const hmac = new Hashes.SHA512
        const verify = hmac.hex_hmac(salt, password)
        return hash == verify ? true : false;
    }

    async function getUserWithEmail(email){
        const user = await User.findOne({
            where: {Email: email}
        });
        return user
    }

    async function createRefreshToken(user, ipAddress){
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

    function randomRefreshToken(){
        const numberByte = new Uint8Array(32);
        crypto.getRandomValues(numberByte);
        return btoa(String.fromCharCode.apply(null, numberByte));
    }

    async function logoutUser(){
        return {message: "Logged Out."};
    }

    export default function authService(){
        return Object.freeze({
            registerUser,
            getUserWithEmail,
            logoutUser,
            verifyPassword,
            createRefreshToken,
        })
    }