import PhoneProduct from '../models/phoneProduct.js'

export function getPhoneProductByProductId(productId){
    return PhoneProduct.findOne({where: { ProductId : productId }})
}