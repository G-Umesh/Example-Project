import {useEffect,useState} from "react"

function WebBook(){
    const [webhook,setWebhook] = useState([]);

    useEffect (() =>{
       
            fetch('https://dummyjson.com/webhook/create',{
            method:"POST"
            })
           .then((data) => {
    console.log(data, "API Response");
    setWebhook(data);
})
 .then((data) => {
                console.log("API Response:", data);
                setWebhook(data);

        })
       .catch((error) => console.log("Error:", error))

    },[]);
    console.log(webhook,"Webhook");
    
    
    return(
        <div>
            <h1>Webhook</h1>
             <pre>{JSON.stringify(webhook, null, 2)}</pre> 
        </div>
    )
}
export default WebBook;