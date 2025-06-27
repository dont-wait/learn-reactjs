import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    //anchor
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/books">Books</NavLink></li>
        </ul>
    )
}
export default Header;