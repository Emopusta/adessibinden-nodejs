import PhoneInternalMemory from "../models/phoneInternalMemory.js"

    async function getAllPhoneInternalMemories(){
        var phoneInternalMemories = await PhoneInternalMemory.findAll({where: { DeletedDate: null}});
        var result = phoneInternalMemories.map((element) => ({
            Id: element.dataValues.Id,
            Capacity: element.dataValues.Capacity,
        }));
        return {items: result};
    }

    export default function phoneInternalMemoryService(){
        return Object.freeze({
            getAllPhoneInternalMemories,
        })
    }