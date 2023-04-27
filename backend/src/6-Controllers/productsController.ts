import express, { NextFunction, Request, Response } from "express"
import productsLogic from "../5-Logic/productsLogic"
import ProductModel from "../4-Models/ProductModel"



const router= express.Router()

router.get("/categories", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const categories = await productsLogic.getAllCatergories()
        response.json(categories)
    }catch(err:any){
        next(err)
    }
})

router.get("/products-by-categoryId/:categoryId", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const categoryId = +request.params.categoryId
        const products = await productsLogic.getProductsByCategoryId(categoryId)
        response.json(products)
    }catch(err:any){
        next(err)
    }
})

router.post("/products", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const productToAdd = new ProductModel(request.body)
        const addedProduct = await productsLogic.postOneProduct(productToAdd)
        response.status(201).json(addedProduct)
    }catch(err:any){
        next(err)
    }
})

router.delete("/products/:productId", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const productId = + request.params.productId
        await productsLogic.deleteOneProduct(productId)
        response.sendStatus(204)
    }catch(err:any){
        next(err)
    }
})


export default router