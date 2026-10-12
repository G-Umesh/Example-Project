import {useState,useEffect} from "react"

function Todos(){
    const [todos,setTodos] = useState([]);

    useEffect (() =>{
        const fetchTodos = () =>{
            fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then((data) => setTodos(data.todos))
            
        }
        fetchTodos();

    },[])
    console.log(todos,"Todos");

    return(
        <div>
            <h1> Todos list</h1>
            {todos.map((item) =>(
                <div key = {item.id}>

                    
                   
                <p>
                    <strong>ID.</strong>{item.id}.</p>
                    
                <p>{item.todo}</p>
                   
                <p>
                    <strong>UserId.</strong>{item.userId}</p>
                   

               <h4>
    {item.completed ? "Completed" : "Not Completed"}
</h4>
                    </div>

            ))}
        </div>
    )
}
export default Todos;