import PhoneModel from "../models/phoneModelModel.js"

    async function getByBrandIdPhoneModel(brandId){
        var phoneModels = await PhoneModel.findAll({where: { DeletedDate: null, BrandId:brandId}});
        var result = phoneModels.map((element) => ({
            Id: element.dataValues.Id,
            Name: element.dataValues.Name,
        }));
        return result;
    }

    export default function phoneModelService(){
        return Object.freeze({
            getByBrandIdPhoneModel,
        })
    }