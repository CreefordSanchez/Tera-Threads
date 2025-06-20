import { NavLink } from "react-router-dom";

function Error404() {
    return (
        <div className="error-404 flex-center">
            <h1>Error 404</h1>
            <p>Oops! This page can not be found.</p>
            <NavLink to='/' className={(navData) => `go-home-btn ${navData.isActive ? 'active' : ''}`}>
                Go Back to Home
            </NavLink>
        </div>
    )
}

export default Error404;