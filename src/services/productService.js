import Product from "../models/productModel.js"

    async function getAllProducts(){
        var products = await Product.findAll({where: { DeletedDate: null}});
        var result = products.map((element) => ({
            Id: element.dataValues.Id,
            Title: element.dataValues.Title,
            Description: element.dataValues.Description,
        }));
        return result;
    }

    async function getByCreatorUserIdProducts(creatorUserId){
        var products = await Product.findAll({where: { CreatorUserId:creatorUserId, DeletedDate: null}});
        var result = products.map((element) => ({
            ProductId: element.dataValues.Id,
            Title: element.dataValues.Title,
        }));
        return result;
    }

    export default function productService(){
        return Object.freeze({
            getAllProducts,
            getByCreatorUserIdProducts,
        })
    }