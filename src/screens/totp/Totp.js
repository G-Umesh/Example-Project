import {useState,useEffect} from "react"

function Totp(){
    const[totp,setTotp] = useState("");

    useEffect (() => {
        const fetchTotp =() => {
            fetch('https://dummyjson.com/2fa?key=JBSWY3DPEHPK3PXP')
        .then(res => res.json())
        .then((data) => {
        console.log(data);
        setTotp(data.totp);
      })

        }
        fetchTotp();
        
    },[]);
    console.log(totp,"Totp");

    return(
        <div>
            <h1>Totp</h1>
            
          <h2><p>"tOtp" :</p>{totp}</h2>
          <p>{totp.period}</p>
          <p>{totp.expiresIn}</p>

        </div>
    )
}
export default Totp;