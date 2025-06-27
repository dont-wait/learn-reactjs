import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    //anchor
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/products">Product</NavLink></li>
        </ul>
    )
}
export default Header;