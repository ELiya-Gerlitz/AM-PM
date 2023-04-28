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
    WHERE categoryId = ?
    `
    const allCategories = await dal.execute(sql, [categoryId])
    return allCategories
}

async function postOneProduct(product :ProductModel):Promise<ProductModel>{
    const sql = `
    INSERT INTO products
    VALUES (
        NULL,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `
    const info : OkPacket = await dal.execute(sql, [product.name, product.dateTime, product.expirationDateTime, product.price, product.categoryId ])
    product.productId = info.insertId
    return product
}
async function deleteOneProduct(productId :number):Promise<void>{
    const sql = `
   DELETE FROM products 
   WHERE productId = ?
    
    `
    const info : OkPacket = await dal.execute(sql, [productId])
    //if(info.affectedRows === 0) throw new ErrorModel...
}



export default {
    getAllCatergories,
    getProductsByCategoryId,
    postOneProduct,
    deleteOneProduct
}