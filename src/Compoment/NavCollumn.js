function NavCollumn(prop) {
    return (
        <div className="nav-collumn">
            <h2>{prop.Title}</h2>
            <div className="footer-links">
                {prop.Links.map((link, key) => 
                    <a key={key}>{link}</a>
                )}
            </div>
        </div>
    )
} 

export default NavCollumn;