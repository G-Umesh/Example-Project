
import { useState } from "react";
import "./AddUser.css";


function AddUsers(){


    const [firstName ,setFirstName] = useState("");

    const [lastName ,setLastName] =useState("");

    const [age ,setAge] =useState("");


    function handlesubmit(){

        //checking
        console.log(firstName,lastName,age);

    }

    return(
<div className="mainform-section">
    <h1>Add Users</h1>

        <div className="form-section">
            <div>
                <label>firstName </label>
                <input type="text"  name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
        
        <div>
                <label>lastName </label>
            <input type="text"  name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div>
            <label>age</label>

            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
       
        </div>
       
        </div>
       
                <button className="submit-btn" onClick={handlesubmit}> submit </button>
        </div>
    
        


    )

}
export default AddUsers;