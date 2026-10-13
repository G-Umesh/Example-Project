import {useEffect,useState} from "react"

function Mock(){
    const [mock,setMock] =useState([]);

    useEffect (() => {
        const fetchMock = () => {
            fetch('https://dummyjson.com/http/404/Hello_Peter')
            .then((res) => {
                    console.log("Status:", res.status);
                    setMock(res.status);
            })
              .catch((error) => console.log(error));
        }
        fetchMock();
    },[])
    console.log(mock,"Mock")
    

return (
    <div>
        <h1>Mock</h1>
      <p>  Status Code : {mock}</p>
    </div>
) 
}
export default Mock;