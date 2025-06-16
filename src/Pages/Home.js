import FilterShop from "../Compoment/FilterShop";
import Newsletter from "../Compoment/Newsletter";

function Home() {
    return (
        <div className="">
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
                            <a href="#services" class="first-hero-button">Explore Womenswear</a>
                        </div>
                        <div className="">
                            <a href="#services" class="second-hero-button">Explore Menswear</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <FilterShop /> */}
            <section className="why-choose-us">
                <h2>Why Shop with Terra Threads?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <span>✔️</span>
                        <h3>Premium Materials</h3>
                        <p>
                            Crafted with high-quality, long-lasting fabrics that 
                            feel as good as they look.
                            </p>
                    </div>
                    <div className="feature-card">
                        <span>🚚</span>
                        <h3>Fast Shipping</h3>
                        <p>
                            We deliver your style in no time—wherever you are.
                        </p>
                    </div>
                    <div className="feature-card">
                        <span>🔁</span>
                        <h3>Easy Returns</h3>
                        <p>
                            Shop with confidence knowing you can return or 
                            exchange with ease.
                        </p>
                    </div>
                    <div className="feature-card">
                        <span>👗</span>
                        <h3>Ethical Fashion</h3>
                        <p>
                            We prioritize people and the planet with every piece 
                            we produce.
                        </p>
                    </div>
                </div>
            </section>
            <Newsletter />
        </div>
    )
}


export default Home;