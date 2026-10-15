import {useState} from "react"
import "./BakeryShop.css";


function BakeryShop (){
    const[customername,setCustomerName] = useState("");
    const[bakeryitem,setBakeryItem] = useState("");
    const[quantity,setQuantity] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("Customer : ",customername);
        console.log("Item : ",bakeryitem);
        console.log("Quantity : ", quantity);
    }

    return(
        <div className ="form-container">
            <form className = "bakeryshop-form" onSubmit ={handleSubmit}>
                 <h1>Sweet Treats </h1>
                 <p>Freshly Baked With Love</p>

                 <label> Customer Name </label>
                 <input name = "text" placeholder="Enter your Name" value={customername} onChange ={(e) => setCustomerName(e.target.value)}
                 required
                 />

                 <label> Select Bakery Item</label>
                 <select value={bakeryitem} onChange ={(e) => setBakeryItem(e.target.value)}
                 required
                 >
                    <option value ="">Select an item</option>
                    <option value ="Cake">Cake</option>
                    <option value ="Donet">Donet</option>
                    <option value = "CupCake">Cookies</option>
                    <option value = "Bread"> Bread</option>

                    </select> 

                    <label> Quantity </label>
                    <input name = "text" placeholder="quantity" value = {quantity} onChange = {(e) => setQuantity(e.target.value)}
                    min = "1"
                    required/>

                    <button type ="submit">Place Order</button> 
                </form> 
        </div>
    )
}
export default BakeryShop;