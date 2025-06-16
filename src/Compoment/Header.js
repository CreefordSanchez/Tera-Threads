import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="border-bottom">
            <div className="container flex-space-between flex-align-center">
                <h1>Terra Threads</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' className={navData => (navData.isActive ? 'active' : '')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart' className={navData => (navData.isActive ? 'active' : '')}>
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;