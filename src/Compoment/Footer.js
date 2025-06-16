import NavCollumn from "./NavCollumn";

function Footer() {
    return (
        <footer>
            <div className="container">
                <NavCollumn 
                    Title={'Need Help?'}
                    Links={[
                        'Contact Us', 
                        'FAQ'
                    ]}
                />
                <NavCollumn 
                    Title={'My Orders'}
                    Links={[
                        'Order Status', 
                        'Shiping Polacy',
                        'Return Polacy',
                        'In-Store Pickup'
                    ]}
                />
                <NavCollumn 
                    Title={'About Us'}
                    Links={[
                        'Our Store', 
                        'Careers',
                        'Find a Store'
                    ]}
                />
                <NavCollumn 
                    Title={'Share Tera Threads'}
                    Links={[
                        'Tera Threads Gift Card', 
                        'Wish List'
                    ]}
                />
            </div>
            <div className="copyright">
                <div className="container">
                    <p>&copy; 2025 Tera Threads. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;