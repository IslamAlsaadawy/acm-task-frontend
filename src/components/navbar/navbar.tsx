import './navbar.css'
import {Link} from "react-router-dom";
const Navar = () => {
    return (
        <nav>
            <div className="nav_container">
                    <ul className='nav_list'>
                        <li><Link to="/">Users</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/Addtocart">Add to Cart</Link></li>
                        <li><Link to="/carts">Cart</Link></li>
                    </ul>

            </div>

        </nav>
    );
};

export default Navar;