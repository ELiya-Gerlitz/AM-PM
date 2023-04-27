import { useForm } from "react-hook-form";
import "./AddProduct.css";
import ProductService from "../../../Service/ProductService";
import ProductModel from "../../../Models/ProductModel";
import { useNavigate } from "react-router-dom";
import CategoryModel from "../../../Models/CategoryModel";
import { useEffect , useState} from "react";

function AddProduct(): JSX.Element {

    const {handleSubmit, register} = useForm<ProductModel>()
    const navigate = useNavigate()

    const [categories, setCategories] = useState<CategoryModel[]>()

    useEffect(()=>{
        ProductService.getAllCategories()
        .then(categories=>setCategories(categories))
        .catch(err=>console.log(err))
    })


    const send = (prod: ProductModel)=>{
        try{
            ProductService.postNewProduct(prod)
            .then(()=>{
                alert("product successfully added!")
                navigate("/home")
            })
            .catch(err=>console.log(err))
        }catch(err:any){
            console.log(err)
        }
    }
    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <input type="text" placeholder="product name" {...register("name")}/><br></br>
                <label htmlFor={"dateTime"}>date and time of producing: </label><br></br>
                <input type="date" placeholder="date and time of producing" {...register("dateTime")}/><br></br>
                <label htmlFor={"expirationDateTime"}>expiration date: </label><br></br>
                <input type="date" placeholder="expiration date" {...register("expirationDateTime")}/><br></br>
                <input type="text" placeholder="price" {...register("price")}/><br></br>
                <select {...register("categoryId")}>
            {categories && 
            <>
            
            {categories.map(c=> <option key={c.categoryId} value={c.categoryId}>{c.categoryName}</option>)}
          
            </>
            }
              </select>
              <br></br>
                <button>submit</button>
            </form>
        </div>
    );
}

export default AddProduct;
