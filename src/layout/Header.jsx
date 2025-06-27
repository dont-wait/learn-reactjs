import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    //anchor
    return (
        <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Product</Link></li>
        </ul>
    )
}
export default Header;