import PhoneRAM from "../models/phoneRAMModel.js"

    async function getAllPhoneRAMs(){
        var phoneRAMs = await PhoneRAM.findAll({where: { DeletedDate: null}});
        var result = phoneRAMs.map((element) => ({
            Id: element.dataValues.Id,
            Memory: element.dataValues.Memory,
        }));
        return {items: result};
    }

    export default function phoneRAMService(){
        return Object.freeze({
            getAllPhoneRAMs,
        })
    }