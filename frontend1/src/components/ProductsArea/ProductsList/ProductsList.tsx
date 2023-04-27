import { useEffect, useState } from "react";
import "./ProductsList.css";
import ProductService from "../../../Service/ProductService";
import CategoryModel from "../../../Models/CategoryModel";
import ProductModel from "../../../Models/ProductModel";

function ProductsList(): JSX.Element {
    const [categories, setCategories] = useState<CategoryModel[]>()
    const [prod, setProd] = useState<ProductModel[]>()

    useEffect(()=>{
        ProductService.getAllCategories()
        .then(categories=>setCategories(categories))
        .catch(err=>console.log(err))
    })


async function handleChange(e : any){
    const categoryId = e.target.value
    console.log(e.target.value)
    try{
        ProductService.getProductsAccordingToCategory(categoryId)
        .then(prod=> setProd(prod))
        .catch(err=>console.log(err))
    }catch(err){
        console.log(err)
    }
}

    return (
        <div className="ProductsList">
			i am product List
            <select onChange={handleChange}>
            {categories && 
            <>
            
            {categories.map(c=> <option key={c.categoryId} value={c.categoryId}>{c.categoryName}</option>)}
          
            </>
            }
              </select>
            
            {prod&& prod.map(p=><p key={p.productId}>{p.name}</p>)}
        </div>
    );
}

export default ProductsList;
