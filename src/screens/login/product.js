import {Link} from "react-router-dom";
import {useNavigate} from"react-router-dom";

function Product(){


    const Navigate = useNavigate();
    return(
        <div>

            <h1>Home</h1>

            <Link to ="/Product">
            Product
            </Link>
           
                <button onClick ={() => Navigate(-1)}>
                    Login

                </button>

            

        </div>
    );
}

export default Product;