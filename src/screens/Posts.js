import {useState,useEffect} from "react";

function Posts(){
    const[posts,setPosts] =useState([]);



    useEffect(()  => {
    const fetchPosts = () =>{
        
          

        fetch('https://dummyjson.com/posts')
   .then((res) => res.json())
   .then((data) => setPosts(data.posts))

    }

        fetchPosts();
        },[])
       

        console.log(posts,"Posts");

    
    return(
        <div>
            <h1>Posts</h1>
            {posts.map((item) =>(
                <div key = {item.id}>
                    <p>{item.tags[0]}</p>
                    <p>{item.tags[1]}</p>
                    <p>{item.tags[2]}</p>
                    <p>{item.title}</p>
                    <p>{item.userId}</p>
                    <p>{item.views}</p>
                     <p>{item.reactions.dislikes}</p>
                     <p>{item.reactions.likes}</p>

                   
                    </div>

              
              ))}
              
            
              

             
              
                
                
                

       
            
          
        </div>
    )

}
export default Posts;