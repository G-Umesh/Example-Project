import {useEffect,useState} from "react"
import './SortUser.css';

function SortUser(){
    const [sortuser,setSortUser] = useState([]);

    useEffect (() =>{
        const fetchSortUser = () => {
            fetch('https://dummyjson.com/users?sortBy=firstName&order=asc')
                .then(res => res.json())
                .then((data) => setSortUser(data.users  ))
        }
        fetchSortUser();

    },[])
    console.log(sortuser,"SortUser");

    return(
        <div>
            <h1> SortUser</h1>
            {sortuser.map((item)=>(
                <div key ={item.id }>
                    <h3>ADDRESS</h3>
                {/* <p><strong> address : </strong>{item.address.address}</p>
                <p><strong>city : </strong>{item.address.city}
                    </p> */}
                    <div className="form-data">
                    <p className="form-data-label">Address:</p>
                    <p className="form-data-value">{item.address.address}</p>
                    </div>
                    <div className="form-data">
                    <p className="form-data-label"> City :</p>
                    <p className="form-data-value">{item.address.city}</p>
                    </div>
                    <div className="form-data">
                    <p className="form-data-label">state :</p>
                    <p className="form-data-value">{item.address.state}</p>
                    </div>
                    <div className="form-data">
                    <p className="form-data-label">StateCode :</p>
                    <p className="form-data-value">{item.address.stateCode}</p>
                    </div>
                    <div className="form-data">
                    <p className="form-data-label">PostalCode:</p>
                    <p className="form-data-value">{item.address.postalCode}</p>
                    </div>
                    
                    
                    

                </div>
            

            
            ))}

            
        </div>
    )

}
export default SortUser;