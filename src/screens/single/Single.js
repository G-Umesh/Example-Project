import {useEffect,useState} from "react";

function Single(){
    const [single,setSingle] = useState([]);

    useEffect(() =>{
        const fetchSingle = () =>{
             fetch('https://dummyjson.com/products/1')
             .then(res => res.json())
             .then((data) =>setSingle(data))
             .then((data)=>console.log(data))
        }
             fetchSingle()
            },[]);

   

console.log(single,"Single");

return(
    <div>
        <p>avaliblitystatus : {single.availabilityStatus}</p>
        <p>brand : {single.brand}</p>
        <p>category : {single.category}</p>
        <p>description : {single.description}</p>
    </div>
)
}
export default Single;