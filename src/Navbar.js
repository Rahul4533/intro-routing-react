import { Outlet,NavLink} from "react-router-dom"

export default function Navbar(){
    return(
        <>
         <div className="nav">
          <h1> <NavLink style={({isActive})=> isActive?{color:"red"}:undefined} className="nav-item" to="/">Home</NavLink> </h1>  
          <h1> <NavLink style={({isActive})=> isActive?{color:"red"}:undefined}className="nav-item" to="/item">Item</NavLink> </h1>
          <h1> <NavLink style={({isActive})=> isActive?{color:"red"}:undefined}to="/about" className="nav-item">About</NavLink> </h1>
          
         </div>
         <Outlet/>
        </>
       
    )
}