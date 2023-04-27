import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(): JSX.Element {
    return (
        <div className="NavBar">
            <NavLink to={"/home"}>home</NavLink>  |   
            <NavLink to={"/products"}>view products according to category</NavLink>  |   
            <NavLink to={"/products/add"}>  add new product</NavLink>
            <hr></hr>
        </div>
    );
}

export default NavBar;
