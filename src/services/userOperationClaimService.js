import OperationClaim from "../models/operationClaimModel.js";
import UserOperationClaim from "../models/userOperationClaimModel.js"

    async function getByUserIdOperationClaims(userId){
        var userOperationClaims = await UserOperationClaim.findAll({where: { UserId:userId, DeletedDate: null}, include:{model:OperationClaim, as:"OperationClaim"}});
        var arr = [];
        userOperationClaims.map((element) => (arr.push(element.dataValues.OperationClaim.Name)));
        return arr;
    }

    export default function userOperationClaimService(){
        return Object.freeze({
            getByUserIdOperationClaims,
        })
    }