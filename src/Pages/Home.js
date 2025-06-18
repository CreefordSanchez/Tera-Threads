import FilterShop from "../Compoment/FilterShop";
import Herobanner from "../Compoment/Herobanner";
import Instapost from "../Compoment/Instapost";
import Newsletter from "../Compoment/Newsletter";
import Reviewform from "../Compoment/Reviewform";
import Reviewslider from "../Compoment/Reviewslider";
import Whychooseus from "../Compoment/Whychooseus";

function Home({ reviews, addReview }) {
  return (
    <div>
      <Herobanner />
      <FilterShop />
      <Whychooseus />
      <Reviewslider reviews={reviews} />
      <Reviewform onSubmit={addReview} /> 
      <Instapost/>    
      <Newsletter />
    </div>
  );
}

export default Home;
