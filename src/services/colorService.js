import Color from "../models/colorModel.js"



    export function getAllColors(){
        return Color.findAll();
    }

    export function createColor(colorName){
        return Color.create({ name:colorName });
    }




