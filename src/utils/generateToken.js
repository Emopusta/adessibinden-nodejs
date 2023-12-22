import jwt from 'jsonwebtoken';

export function generateToken(res, validUserId){
    const token = jwt.sign({id:validUserId}, process.env.JWT_SECRET, {algorithm: 'HS512'})
    res.cookie('token', token, {httpOnly: true })
}