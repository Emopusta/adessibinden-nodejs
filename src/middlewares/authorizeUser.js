import { errorHandler } from "../utils/errorHandler.js";
import jwt from 'jsonwebtoken';

export function authorizeUser(req, res, next){
    const token = req.cookies.token;

    if (!token) return next(errorHandler(401, "Unauthenticated."))

    jwt.verify(token, process.env.JWT_SECRET, function(err, user){
        if (err) return next(errorHandler(403, 'Forbidden'));

        req.user = user;
        next();
    })
    

}
