import {useState} from "react";
import "./AddProduct.css";  

function AddProduct(){
    const [productname,setProductName] =useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log(productname,price,category);

    }

    return(
        <div className = "form-container">
            <form className = "addproduct-form" onSubmit = {handleSubmit}>
                <h1>Product</h1>

                <label>Product Name</label>
                <input type = "text"  placeholder = "Enter product name" value = {productname} onChange ={(e) => setProductName (e.target.value)}
                required/>

                <label> Price </label>
                <input type ="text" placeholder = "Enter product price" value = {price} onChange = {(e) => setPrice (e.target.value)}
                required />

                <label> Category </label>
                <input type = "text" placeholder = "Enter product category" value = {category} onChange = {(e) => setCategory(e.target.value)}
                required/>

                <button type = "submit"> Add Product</button>

            </form>
        </div>
    )
}
export default AddProduct;