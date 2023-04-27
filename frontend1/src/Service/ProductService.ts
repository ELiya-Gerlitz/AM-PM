import axios from "axios";
import CatrgoryModel from "../Models/CategoryModel";
import appConfig from "../Utils/AppConfig";
import ProductModel from "../Models/ProductModel";

async function getAllCategories():Promise<CatrgoryModel[]>{
    const response = await axios.get<CatrgoryModel[]>(appConfig.getAllCategoriesURL)
    const categories = response.data
    return categories
}

async function getProductsAccordingToCategory(categoryId : number):Promise<ProductModel[]>{
    const response = await axios.get<ProductModel[]>(appConfig.getAllProductsAccordingToCategoryIdURL + categoryId)
    const products = response.data
    return products

}

async function postNewProduct(prod : ProductModel):Promise<void>{
    await axios.post<ProductModel>(appConfig.postProdURL, prod)

}


export default {
    getAllCategories,
    getProductsAccordingToCategory,
    postNewProduct
}