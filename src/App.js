import Home from "./pages/Home";
import Items from "./pages/items";
import About from "./pages/About";

import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from "react-router-dom";
import Navbar from "./Navbar";
function App(){
  // const router= createBrowserRouter([
  //   {path:"/",element:<Navbar />, children:[
  //     {index: true,element:<Home/>},
  //   {path:"/item",element:<Items/>},
  //   {path:"/about",element:<About/>}
  //   ]}
  // ])

 const routes= createRoutesFromElements(  
    
   <Route path="/" element={<Navbar />}>
    <Route path="" element={<Home />}/>
    <Route path="/item" element={<Items />}/>
    <Route path="/about" element={<About />}/>
  </Route>
   
  
  )
  const router= createBrowserRouter(routes);
  return(
    <>
    <RouterProvider router={router}/>
   
    </>
  )
}


export default App;