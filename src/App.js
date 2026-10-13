import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import About from "../src/screens/about/About"
import Home from "../src/screens/home/Home"
import Login from "../src/screens/login/Login"
import Product from "../src/screens/login/product"
// import Products from "./screens/product/Products"
import Employee from "./screens/login/employee/Employee"
import Cart from "./screens/login/cart/Cart"
import Users from "./screens/home/users/Users"
import Comments from "./screens/comments/Comments"
import Single from "./screens/single/Single"
import Recipes from "./screens/recipes/Recipes"
import AddUsers from "./screens/users/AddUsers"
// import Product from "./screens/product/Product"
import Addrecipe from "./screens/addrecipe/Addrecipe"
import Posts from "./screens/Posts"
import Quotes from "./screens/quotes/Quotes"
import Tools from "./screens/tools/Tools"
import Todos from "./screens/todos/Todos"
import SortUser from"./screens/sortuser/SortUser"
import NewPost from "./screens/newpost/NewPost"
import Image from "./screens/image/Image"
import DynamicImage from "./screens/dynamicimage/DynamicImage"
import Mock from "./screens/mock/Mock"
import WebBook from "./screens/webbook/WebBook"
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
    {/* <Route path ="users" element ={<Users/>}/> */}
    <Route path ="comments" element ={<Comments/>}/>
    <Route path ="single" element ={<Single/>}/>
    <Route path ="recipes" element ={<Recipes/>}/>
    {/* <Route path ="AddUsers" element ={<AddUsers/>}/> */}
    <Route path ="Product" element ={<Product/>}/>
    <Route path ="Addrecipe" element ={<Addrecipe/>}/>
    <Route path ="Posts" element ={<Posts/>}/>
    <Route path ="Quotes" element ={<Quotes/>}/>
    <Route path ="tools" element ={<Tools/>}/>
    <Route path ="todos" element ={<Todos/>}/>
    <Route path  ="SortUser" element ={<SortUser/>}/>
    <Route path ="NewPost" element ={<NewPost/>}/>
    <Route path ="Image" element ={<Image/>}/>
    <Route path ="DynamicImage" element ={<DynamicImage/>}/>
    <Route path ="Mock" element ={<Mock/>}/>
    <Route path ="WebBook" element = {<WebBook/>}/>
    </Routes>
    </BrowserRouter>
  );
  
}   
 
export default App;