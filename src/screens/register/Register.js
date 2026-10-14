import {useState} from "react";
import "./Register.css";
function Register(){
    const[name,setName] =useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name,email,password);
    }
    return(
        <div className = "form-container">
            <form className ="register-form" onSubmit={handleSubmit}>
                <h2> CreateAccount</h2>
                <p>please fill in your details</p>

                <label>FullName</label>
                <input type ="text" placeholder="Enter your Name" value ={name } onChange={(e) => setName(e.target.value)}
                required />

                <label>Email Address</label>
                <input type ="email " placeholder = "Enter your Email" value ={email} onChange={(e) => setEmail(e.target.value)}
                required />

                <label> Password </label>
                <input type ="password" placeholder = "Enter your Password" value ={password} onChange = {(e) => setPassword(e.target.value)}
                required />
                <button type = "submit">Register</button>

                
            </form>

        </div>
    )
}
export default Register;