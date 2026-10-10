import {useEffect, useState} from "react";

function Employee(){

    const[employeename,setEmployee] = useState();
    
    const[employeeid,setEmployeeid] =useState();

    const[employeedepartment,setEmployeedepartment]=useState();

    const[employeesalary,setEmployeesalary] =useState();

    const [products ,setProducts] = useState([]);

    function handleSubmit(){

        console.log(employeename,employeeid,employeedepartment,employeedepartment,employeesalary);
        
    }

    useEffect(()=>{

    const fetchProduct = () => 
        fetch("https://dummyjson.com/products").
    then(res => res.json())
    .then((data)=>setProducts(data.products))
    fetchProduct();
    },[])

    console.log(products, "products");
    
    return(
         <div>

            products:{products.length}

            {products.map((product)=>{
                return <div key={product.id}>

                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.discountPercentage}</p>
                    <p>{product.rating}</p>
                    <p>{product.stock}</p>
                    <p>{product.brand}</p>
                    <p>{product.category}</p>
                    <img src={product.thumbnail} alt={product.title} />

                </div>

            })}

        </div>
    

    )
       
}
export default Employee;