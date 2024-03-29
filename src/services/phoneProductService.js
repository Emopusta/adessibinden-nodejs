import Color from '../models/colorModel.js'
import PhoneBrand from '../models/phoneBrandModel.js';
import PhoneInternalMemory from '../models/phoneInternalMemory.js';
import PhoneModel from '../models/phoneModelModel.js';
import PhoneProduct from '../models/phoneProductModel.js'
import PhoneRAM from '../models/phoneRAMModel.js';
import Product from '../models/productModel.js';
import UserFavouriteProduct from '../models/userFavouriteProductModel.js';
import User from '../models/userModel.js';

async function createPhoneProduct(createPhoneProductDto){

    var createdProduct = await Product.create({
        ProductCategoryId: createPhoneProductDto.productCategoryId,
        Title: createPhoneProductDto.title,
        Description: createPhoneProductDto.description,
        CreatorUserId: createPhoneProductDto.creatorUserId,
    })

    var createdPhoneProduct = await PhoneProduct.create({
        ProductId: createdProduct.dataValues.Id,
        ColorId: createPhoneProductDto.colorId,
        ModelId: createPhoneProductDto.modelId,
        InternalMemoryId: createPhoneProductDto.internalMemoryId,
        RAMId: createPhoneProductDto.ramId,
        UsageStatus: createPhoneProductDto.usageStatus,
        Price: createPhoneProductDto.price,
    });

    return {
        ProductCategoryId: createdProduct.dataValues.ProductCategoryId,
        CreatorUserId: createdProduct.dataValues.CreatorUserId,
        ProductId: createdProduct.dataValues.Id,
        ColorId: createdPhoneProduct.dataValues.ColorId,
        ModelId: createdPhoneProduct.dataValues.ModelId,
        InternalMemoryId: createdPhoneProduct.dataValues.InternalMemoryId,
        RAMId: createdPhoneProduct.dataValues.RAMId,
        UsageStatus: createdPhoneProduct.dataValues.UsageStatus,
        Price: Number(createdPhoneProduct.dataValues.Price.replace(/[^0-9.-]+/g,"")),
    }
}

async function getPhoneProductByProductId(productId){
    const phoneProduct = await PhoneProduct.findOne({
        where: { ProductId : productId, DeletedDate : null },
        include:[
            {model: Color, as: 'Color'},
            {model: Product, as: 'Product' , include: [{model: User, as: 'CreatorUser'}]},
            {model: PhoneModel, as: 'Model'},
            {model: PhoneRAM, as: 'RAM'},
            {model: PhoneInternalMemory, as: 'InternalMemory'},
        ]});

    const {Color: color,
         Product: product,
         Model: phoneModel,
         RAM: phoneRAM, 
         InternalMemory: phoneInternalMemory,  
         ...rest
        } = phoneProduct.dataValues;

    const result = { 
        ProductDescription: product.Description,
        ProductTitle: product.Title,
        ProductCreatorUserEmail: product.CreatorUser.Email,
        ProductCreatorUserId: product.CreatorUserId,
        ColorName: color.Name,
        ModelName: phoneModel.Name,
        InternalMemoryCapacity: phoneInternalMemory.Capacity,
        RAMMemory: phoneRAM.Memory, 
        UsageStatus: rest.UsageStatus,
        Price: Number(rest.Price.replace(/[^0-9.-]+/g,"")),
    }
    return result;
}

async function getByIdDetailsForUpdatePhoneProduct(productId){
    const phoneProduct = await PhoneProduct.findOne({
        where: { ProductId : productId, DeletedDate : null },
        include:[
            {model: Color, as: 'Color'},
            {model: Product, as: 'Product' , include: [{model: User, as: 'CreatorUser'}]},
            {model: PhoneModel, as: 'Model', include: [{model: PhoneBrand, as: 'Brand'}]},
            {model: PhoneRAM, as: 'RAM'},
            {model: PhoneInternalMemory, as: 'InternalMemory'},
        ]});
    
    const {
        Color: color,
        Product: product,
        Model: phoneModel,
        RAM: phoneRAM, 
        InternalMemory: phoneInternalMemory,  
        ...rest
    } = phoneProduct.dataValues;

    const result = { 
        ProductDescription: product.Description,
        ProductTitle: product.Title,
        ProductCreatorUserEmail: product.CreatorUser.Email,
        ProductCreatorUserId: product.CreatorUserId,
        ProductProductCategoryId: product.ProductCategoryId,
        ColorId: color.Id,
        ColorName: color.Name,
        ModelId: phoneModel.Id,
        ModelName: phoneModel.Name,
        ModelBrandId: phoneModel.Brand.Id,
        ModelBrandName: phoneModel.Brand.Name,
        InternalMemoryId: phoneInternalMemory.Id,
        InternalMemoryCapacity: phoneInternalMemory.Capacity,
        RAMId: phoneRAM.Id, 
        RAMMemory: phoneRAM.Memory, 
        UsageStatus: rest.UsageStatus,
        Price: Number(rest.Price.replace(/[^0-9.-]+/g,"")),
    }
    return result;
}

async function deletePhoneProduct(productId){
    const userFavouriteProducts = await UserFavouriteProduct.destroy({where: { ProductId:productId , DeletedDate : null }});
    const phoneProduct = await PhoneProduct.findOne({where: { ProductId:productId, DeletedDate : null }});
    const product = await Product.findOne({where: { Id:productId, DeletedDate : null }});
    phoneProduct.DeletedDate = new Date();
    product.DeletedDate = new Date();
    await phoneProduct.save();
    await product.save();

    return { productId: productId };
}

async function updatePhoneProduct(updatePhoneProductDto){
    updateProduct(updatePhoneProductDto.productId, updatePhoneProductDto.creatorUserId, updatePhoneProductDto.productCategoryId, updatePhoneProductDto.description, updatePhoneProductDto.title)
    
    const phoneProduct = await PhoneProduct.findOne({where: { ProductId:updatePhoneProductDto.productId, DeletedDate : null }});
    phoneProduct.ProductId = updatePhoneProductDto.productId;
    phoneProduct.ColorId = updatePhoneProductDto.colorId;
    phoneProduct.ModelId = updatePhoneProductDto.modelId;
    phoneProduct.InternalMemoryId = updatePhoneProductDto.internalMemoryId;
    phoneProduct.RAMId = updatePhoneProductDto.ramId;
    phoneProduct.UsageStatus = updatePhoneProductDto.usageStatus;
    phoneProduct.Price = updatePhoneProductDto.price;
    phoneProduct.save();

    return phoneProduct;
}

async function updateProduct(productId, creatorUserId, productCategoryId, description, title){
    const product = await Product.findOne({where: { Id:productId, DeletedDate : null }});

    product.Id = productId;
    product.Description = description;
    product.Title = title;
    product.CreatorUserId = creatorUserId;
    product.ProductCategoryId = productCategoryId;
    await product.save();
}

export default function phoneProductService(){
    return Object.freeze({
        getPhoneProductByProductId,
        getByIdDetailsForUpdatePhoneProduct,
        deletePhoneProduct,
        updatePhoneProduct,
        createPhoneProduct,
    })
}