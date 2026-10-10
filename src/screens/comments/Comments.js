import {useEffect,useState} from "react";

function Comments(){
    const [ comments,setComments] =useState([]);

    useEffect (() =>{

            const fetchComments =() =>

            fetch('https://dummyjson.com/comments')
    .then(res => res.json())
    .then((data) => setComments(data.comments));
    fetchComments();

    },[]);

        
    console.log(comments,"Comments");

    return(
        <div>
      
        {comments.map((item)=>(
              <div key={item.id}>
                 <h1>{item.user.fullName}</h1>

            <p>    Comments ID:{item.id}</p>
            <p> LIKES:{item.likes}</p>
            <p>POSTID:{item.postid}</p>
          
            </div>
        ))}

        
        

        </div>

        
        
    )

    }
    export default Comments;