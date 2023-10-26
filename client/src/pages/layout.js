import { Outlet,Link } from "react-router-dom";

const Layout = () =>{
 return (
    <div> 
        <nav>
            <ul>
                <li>
                    <Link to="index">vistas</Link>
                </li>
                <li>
                    <Link to="/vistas">otra</Link>
                </li>
               
            </ul>
        </nav>
        <hr />
        <Outlet/>
    </div>

 )
}
export default Layout;