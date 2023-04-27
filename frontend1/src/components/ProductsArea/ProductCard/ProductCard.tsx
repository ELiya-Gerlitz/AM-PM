import ProductModel from "../../../Models/ProductModel";
import "./ProductCard.css";

interface ProductsInterface{
      product: ProductModel  
}

function ProductCard(props : ProductsInterface): JSX.Element {

    
    return (
        <div className="ProductCard">
            <div className="ProdC">
                <p><strong>Product Name : </strong>{props.product.name}</p>
                <p><strong>Price : </strong>{props.product.price}</p>
                <p><strong>Date of producing : </strong>{props.product.dateTime}</p>
                <p><strong>Expiration Date : </strong>{props.product.expirationDateTime}</p>
                <p><strong>Product Id : </strong>{props.product.productId}</p>

                </div>
			
        </div>
    );
}

export default ProductCard;
