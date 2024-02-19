import Color from "../models/colorModel.js"

    async function getAllColors(){
        var colors = await Color.findAll({where: { DeletedDate: null}});
        var result = colors.map((element) => ({
            Id: element.dataValues.Id,
            Name: element.dataValues.Name,
        }));
        return {items: result};
    }

    async function createColor(colorName){
        return await Color.create({ name:colorName });
    }

    export default function colorService(){
        return Object.freeze({
            getAllColors,
            createColor,
        })
    }