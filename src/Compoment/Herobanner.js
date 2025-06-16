function Herobanner() {
    return(
        <section class="hero ">
            <div class="hero-content">
                <h2>Define Your Look. Own Your Moment.</h2>
                <p>
                    Discover bold, timeless fashion that speaks for you. 
                    From everyday essentials to signature pieces, our 
                    collections are designed to empower your style and 
                    elevate your confidence, one outfit at a time.
                </p>
                <div className="flex banner-btn">
                    <div className="">
                        <a href="#services" className="first-hero-button">
                            Explore Womenswear
                        </a>
                    </div>
                    <div className="">
                        <a href="#services" className="second-hero-button">
                            Explore Menswear
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Herobanner;