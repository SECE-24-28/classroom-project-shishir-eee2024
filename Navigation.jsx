import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Left side - Logo with icon */}
                <div className="nav-left">
                    <div className="nav-logo">
                        <Link to="/" className="logo-link">
                            <span className="logo-icon">🛒</span>
                            <span className="logo-text">BazarNepal</span>
                        </Link>
                    </div>
                </div>

                {/* Right side - Navigation menu */}
                <div className="nav-right">
                    <div className="nav-menu">
                        <Link to="/" className="nav-link">
                            <span className="nav-icon">🏠</span>
                            <span className="nav-text">Home</span>
                        </Link>
                        <Link to="/products" className="nav-link">
                            <span className="nav-icon">📦</span>
                            <span className="nav-text">Products</span>
                        </Link>
                        <Link to="/cart" className="nav-link">
                            <span className="nav-icon">🛍️</span>
                            <span className="nav-text">Cart</span>
                        </Link>
                        <Link to="/contact" className="nav-link">
                            <span className="nav-icon">📞</span>
                            <span className="nav-text">Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;