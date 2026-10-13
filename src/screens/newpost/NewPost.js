import {useState} from "react"

function NewPost(){
    const [title,setTitle] = useState("");

    function handleSubmit(){
        console.log(title);

        const NewPost = () =>{
            fetch('https://dummyjson.com/posts/add',{
                method :'POST',
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify({
                title :title,
                userId : 10,
                
                }
                )

        })
        .then(res => res.json())
        .then(res => console.log(res))
    }
    NewPost();

    }
     return(
        <div>
            <h1>New Post</h1>
           <label>Title</label> 
            <input type = "text" name =" newPost" value={title} onChange ={(e) => setTitle(e.target.value)}/>
            <button onClick ={handleSubmit}>submit</button>

        </div>
     )
}
export default NewPost;