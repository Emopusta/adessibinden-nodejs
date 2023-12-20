import { getAllColors, createColor } from "../services/colorService.js";


function service(){
    return Object.freeze({
        getAllColors,
        createColor
    })
}

async function serviceRegistrer(req, res, next){

    try {
        req.service = service();
        next()
    } catch (error) {
        console.error(error);
    }

}


export default serviceRegistrer