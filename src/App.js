import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import About from "../src/screens/about/About"
import Home from "../src/screens/home/Home"
import Login from "../src/screens/login/Login"
//import Product from "../src/screens/login/product"
//import Products from "./screens/product/Products"
import Employee from "./screens/login/employee/Employee"
import Cart from "./screens/login/cart/Cart"
import Users from "./screens/home/users/Users"
import Comments from "./screens/comments/Comments"
import Single from "./screens/single/Single"
import Recipes from "./screens/recipes/Recipes"
import AddUsers from "./screens/users/AddUsers"
import Product from "./screens/product/Product"
import Addrecipe from "./screens/addrecipe/Addrecipe"
import Posts from "./screens/Posts"
function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path =  "/" element={< Login />}/> 
    <Route path = "/home" element={< Home />}/>
    <Route path = "About" element ={<About/>}/>
    {/* <Route path = "/product" element ={<Product />}/> */}
    {/* <Route path = "/products" element ={<Products />}/> */}
    <Route path ="employee" element ={<Employee />}/>
    <Route path ="cart" element ={<Cart/>}/>
    <Route path ="users" element ={<Users/>}/>
    <Route path ="comments" element ={<Comments/>}/>
    <Route path ="single" element ={<Single/>}/>
    <Route path ="recipes" element ={<Recipes/>}/>
    <Route path ="AddUsers" element ={<AddUsers/>}/>

    <Route path ="Product" element ={<Product/>}/>
    <Route path ="Addrecipe" element ={<Addrecipe/>}/>
    <Route path ="Posts" element ={<Posts/>}/>
    </Routes>
    </BrowserRouter>
  );
  
}   
 
export default App;