import {useState} from "react"


function Addrecipe(){
    const [recipe,setRecipe] =useState();

    function handleSubmit(){
        console.log(recipe);

        const addRecipe =() => {
            
            fetch ('https://dummyjson.com/recipes/add',{

            method :"POST",
            header :{'ContentType' :"application/json"},
            body : JSON.stringify ({
                name  : Addrecipe
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))

       
        }   
        addRecipe();
    }
    
    return(
        <div>
            <h1>AddRecipe</h1>

            <lable>Name</lable>
            <input type = "text" name ="Addrecipe" value = {recipe} onChange ={(e) => setRecipe(e.target.value)}/>

            <button onClick = {handleSubmit}>submit</button>
        </div>
    )

}
export default Addrecipe;