import { errorHandler } from "../utils/errorHandler.js";

export const authorize = (authorizedRoles) => function(req, res, next){
    
    const { 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role' : roles } = req.user;

    const authorizedRolesList = authorizedRoles.split(',').map(function(role){
        return role.trim()
    });

    const authorizedFlag = authorizedRolesList.some(function(item) {
        return roles.includes(item);
    });

    if (!authorizedFlag) return next(errorHandler(401, 'Unauthorized.'));

    next();
}
