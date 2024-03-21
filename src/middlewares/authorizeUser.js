import { errorHandler } from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken';

export function authorizeUser(req, res, next){
    const authorization = req.header('Authorization')
    if (!authorization) return next(errorHandler(403, "Unauthenticated."))
    
    const [bearerString, token] = authorization.split(' ');

    jwt.verify(token, process.env.JWT_SECRET, function(err, user){
        if (err) return next(errorHandler(401, 'Unauthorized.'));

        req.user = user;
        next();
    })
}
