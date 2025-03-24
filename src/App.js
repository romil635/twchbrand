import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import WatchAccessories from "./Component/WatchAccessories";
import Smartwatch from "./Component/Smartwatch";
import AboutPage from "./Component/AboutPage";
import LoginPage from "./Component/LoginPage";
import Product from "./Component/Product";
import Footer from "./Component/Footer";   

function App() {
    return (
      <div className="App"> 

        <BrowserRouter>
        <Navbar/>
        <Routes>      

        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/> 
        <Route path='/WatchAccessories' element={<WatchAccessories/>}/> 
        <Route path='/Smartwatch' element={<Smartwatch/>}/> 
        <Route path='/AboutPage' element={<AboutPage/>}/> 
        <Route path='/LoginPage' element={<LoginPage/>}/> 
        <Route path='/Product' element={<Product/>}/> 

        </Routes>
        <Footer/>
        </BrowserRouter>  

      </div>
  )
  } 

export default App; 




