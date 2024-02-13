import PhoneBrand from "../models/phoneBrandModel.js"

    async function getAllPhoneBrands(){
        var phoneBrands = await PhoneBrand.findAll({where: { DeletedDate: null}});
        var result = phoneBrands.map((element) => ({
            Id: element.dataValues.Id,
            Name: element.dataValues.Name,
        }));
        return result;
    }

    export default function phoneBrandService(){
        return Object.freeze({
            getAllPhoneBrands,
        })
    }