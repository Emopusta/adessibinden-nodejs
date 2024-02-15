import jwt from 'jsonwebtoken';

export async function generateToken(req, res, validUserId, email){
    const roles = await req.userOperationClaimService.getByUserIdOperationClaims(validUserId);
    const token = jwt.sign(
        {
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier':validUserId.toString(),
        'email': email,
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role':roles
        },
        process.env.JWT_SECRET,
        {algorithm: 'HS512'})
    return token;
}