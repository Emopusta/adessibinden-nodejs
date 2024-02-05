import jwt from 'jsonwebtoken';

export function generateToken(res, validUserId, email){
    const token = jwt.sign({'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier':validUserId.toString(), 'email': email.toString()}, process.env.JWT_SECRET, {algorithm: 'HS512'})
    return token;
}