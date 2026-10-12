import {useEffect,useState} from "react";

function Tools(){
    const [tools,setTools] =useState([]);

    useEffect(() => {
        const fetchTools = () => {
            fetch('https://dummyjson.com/2fa?key=JBSWY3DPEHPK3PXP')
            .then(res => res.json())
           
            
            .then((data) => setTools(data))

           
        }
         fetchTools();
    },[])

    console.log(tools,"Tools");

    return(
        <div>
            <h1>Tools</h1>
         

                    <p><strong> Totp : </strong>
                        {tools.totp}</p>
                    <p>
                        <strong> Expriesin : </strong>{tools.expiresIn}</p>
                   
                    <p>
                        <strong> Period : </strong>{tools.period}</p>
                 
       
        </div>
         
    )

}
export default Tools;