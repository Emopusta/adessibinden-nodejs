import PhoneProduct from '../models/phoneProduct.js'

function getPhoneProductByProductId(productId){
    return PhoneProduct.findOne({where: { ProductId : productId }})
}

export default function phoneProductService(){
    return Object.freeze({
        getPhoneProductByProductId,
    })
}