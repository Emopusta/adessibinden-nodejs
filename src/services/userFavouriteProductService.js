import Product from "../models/productModel.js";
import UserFavouriteProduct from "../models/userFavouriteProductModel.js"

    async function getByUserIdUserFavouriteProduct(userId){
        var userFavouriteProducts = UserFavouriteProduct.findAll({where: { UserId: userId }, include: {model:Product, as: "Product"}});
        var result = (await userFavouriteProducts).map((element) => ({ProductId: element.dataValues.Product.Id, ProductTitle:element.dataValues.Product.Title}))
        return result;
    }

    export default function userFavouriteProductService(){
        return Object.freeze({
            getByUserIdUserFavouriteProduct,
        })
    }