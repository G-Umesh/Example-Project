import {useEffect,useState} from "react"

function Recipes(){
    const [recipes,setRecipes] =useState([]);

    useEffect(()  => {
        const fetchRecipes =()=>{
            fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then ((data) =>setRecipes(data.recipes));
            
        }

            fetchRecipes()
        },[]);


        console.log(recipes,"Recipes");

        return (
            <div>


            {recipes.map((item) => (
                <div key = {item.id}>
                    <h2>{item.name}</h2>

                    {item.ingredients.map((item)=>(
                        <p>{item}</p>
                    ))}

                    <img src ={item.image}></img>
                    
                    {item.instructions.map((item) =>(
                        <p>{item}</p>

                       

        ))}
                     {item.mealType.map((item) => (
                            <h3>{item}</h3>


                        ))}
                        {item.tags.map((item) => (
                            <p>{item}</p>
                        ))}
                        <p>{item.name}  </p>

                </div>

            ))}


            </div>
            
        )


       
       
       

       
    
   
    
}
export default Recipes;