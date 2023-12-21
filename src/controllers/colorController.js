

     async function getAllColors(req, res){
        const response = req.service.getAllColors();
        res.status(400).json((await response))
    }
    
    async function createColor(req, res){
        const {name} = req.body;
        const response = req.service.createColor(name);

        res.status(400).json((await response).dataValues)
    }
    
    export {getAllColors, createColor};