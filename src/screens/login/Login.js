import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();
  
    const [username ,setUsername] =useState();

    const [password ,setPassword] =useState();

    

     

        const fetchLogin = () => {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    expiresInMins: 30,
                }),
                credentials: 'include'
            })
            .then(res => res.json())
            .then(() => navigate('/home'));
        }


   

    return(
        <div >
            <label>
                username
            </label>
            <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} />

            <label>
                password
            </label>
            <input type="text" name="password" value={password} onChange={(val)=>setPassword(val.target.value)}/>

            <button onClick = {fetchLogin}>
                Login
            </button>
        </div>

        
        
    )

}
export default Login;
