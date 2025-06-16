import FilterShop from "../Compoment/FilterShop";
import Newsletter from "../Compoment/Newsletter";
import Whychooseus from "../Compoment/Whychooseus";

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
            <FilterShop />
            <Whychooseus/>
            <Newsletter />
        </div>
    )
}


export default Home;