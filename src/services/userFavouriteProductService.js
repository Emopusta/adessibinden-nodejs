import Product from "../models/productModel.js";
import UserFavouriteProduct from "../models/userFavouriteProductModel.js"

    async function getByUserIdUserFavouriteProduct(userId){
        var userFavouriteProducts = await UserFavouriteProduct.findAll({where: { UserId: userId }, include: {model:Product, as: "Product"}});
        var result = userFavouriteProducts.map((element) => ({
            ProductId: element.dataValues.Product.Id,
             ProductTitle:element.dataValues.Product.Title
            }));
        return result;
    }

    async function addUserFavouriteProduct(userId, productId){
        return await UserFavouriteProduct.create({ UserId:userId, ProductId:productId });
    }

    async function deleteUserFavouriteProduct(userId, productId){
        return await UserFavouriteProduct.destroy({where: {UserId:userId, ProductId:productId}})
    }

    async function getByProductAndUserIdUserFavouriteProduct(userId, productId){
        var userFavouriteProduct = await UserFavouriteProduct.findOne({where: { UserId: userId, ProductId: productId}});
        return userFavouriteProduct;
    }

    export default function userFavouriteProductService(){
        return Object.freeze({
            getByUserIdUserFavouriteProduct,
            addUserFavouriteProduct,
            deleteUserFavouriteProduct,
            getByProductAndUserIdUserFavouriteProduct
        })
    }