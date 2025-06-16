import FilterShop from "../Compoment/FilterShop";
import Herobanner from "../Compoment/Herobanner";
import Newsletter from "../Compoment/Newsletter";
import Whychooseus from "../Compoment/Whychooseus";

function Home() {
    return (
        <div className="">
            <Herobanner/>
            <Whychooseus/>
            <FilterShop />
            <Newsletter />
        </div>
    )
}


export default Home;