import Color from "../models/colorModel.js"

    function getAllColors(){
        return Color.findAll();
    }

    function createColor(colorName){
        return Color.create({ name:colorName });
    }

    export default function colorService(){
        return Object.freeze({
            getAllColors,
            createColor,
        })
    }