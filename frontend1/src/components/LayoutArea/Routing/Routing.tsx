import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../Home/Home";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/add" element={<AddProduct/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
