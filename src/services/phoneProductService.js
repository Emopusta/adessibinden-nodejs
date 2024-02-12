import Color from '../models/colorModel.js'
import PhoneInternalMemory from '../models/phoneInternalMemory.js';
import PhoneModel from '../models/phoneModelModel.js';
import PhoneProduct from '../models/phoneProductModel.js'
import PhoneRAM from '../models/phoneRAMModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

async function getPhoneProductByProductId(productId){
    const phoneProduct = await PhoneProduct.findOne({
        where: { ProductId : productId },
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

export default function phoneProductService(){
    return Object.freeze({
        getPhoneProductByProductId,
    })
}