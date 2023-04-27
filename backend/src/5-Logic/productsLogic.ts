import dal from "../2-Utils/dal";
import CatrgoryModel from "../4-Models/CatrgoryModel";
import ProductModel from "../4-Models/ProductModel";
import OkPacket from "mysql"


async function getAllCatergories():Promise<CatrgoryModel[]>{
    const sql = `
    SELECT * FROM categories
    `
    const allCategories = await dal.execute(sql)
    return allCategories
}

async function getProductsByCategoryId(categoryId :number):Promise<ProductModel[]>{
    const sql = `
    SELECT * FROM products
    WHERE categoryId = ${categoryId}
    `
    const allCategories = await dal.execute(sql)
    return allCategories
}

async function postOneProduct(product :ProductModel):Promise<ProductModel>{
    const sql = `
    INSERT INTO products
    VALUES (
        NULL,
        "${product.name}",
        "${product.dateTime}",
        "${product.expirationDateTime}",
        ${product.price},
        ${product.categoryId}
    )
    `
    const info : OkPacket = await dal.execute(sql)
    product.productId = info.insertId
    return product
}
async function deleteOneProduct(productId :number):Promise<void>{
    const sql = `
   DELETE FROM products 
   WHERE productId = ${productId}
    
    `
    const info : OkPacket = await dal.execute(sql)
    //if(info.affectedRows === 0) throw new ErrorModel...
}



export default {
    getAllCatergories,
    getProductsByCategoryId,
    postOneProduct,
    deleteOneProduct
}