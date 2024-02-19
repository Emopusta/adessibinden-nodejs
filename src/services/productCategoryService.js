import ProductCategory from "../models/productCategoryModel.js"

    async function getAllProductCategories(){
        var productCategories = await ProductCategory.findAll({where: { DeletedDate: null}});
        var result = productCategories.map((element) => ({
            Id: element.dataValues.Id,
            Name: element.dataValues.Name,
        }));
        return {items: result};
    }

    export default function productCategoryService(){
        return Object.freeze({
            getAllProductCategories,
        })
    }