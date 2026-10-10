import {useState} from "react"

function Product(){
    const[title,setTitle] =useState();

    function handleSubmit(){
        console.log(title);

        const addProduct=()  => fetch('https://dummyjson.com/products/add',{
            method :"POST",
            headers :{'ContentType' :"application/json"},
            body : JSON.stringify({
                title : title
            })
                
            })
            .then(res => res.json())
            .then((res) => console.log(res))

            addProduct();
        }


    
    return(
        <div> 
            <h1>Product</h1>

            <lable>title</lable>
            <input type ="text" name = "title" value = {title} onChange ={(val)=> setTitle (val.target.value)}/>
            
            <button onClick={handleSubmit}>submit</button>


        </div>

    ) 

}
export default Product;