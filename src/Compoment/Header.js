import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="border-bottom">
            <div className="container flex-space-between flex-align-center">
                <h1>Terra Threads</h1>
                <nav>
                    <ul>
                        <Link to='/'>Home</Link>
                         <Link to='/cart'>Cart</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;