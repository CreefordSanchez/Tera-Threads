import FilterShop from "../Compoment/FilterShop";
import Herobanner from "../Compoment/Herobanner";
import Instapost from "../Compoment/Instapost";
import Newsletter from "../Compoment/Newsletter";
import Reviewform from "../Compoment/Reviewform";
import Reviewslider from "../Compoment/Reviewslider";
import Whychooseus from "../Compoment/Whychooseus";
import { motion } from "motion/react"

function Home({ reviews, addReview }) {
  return (
    <motion.div 
    initial={{opacity: 0, y: -30}}
    animate={{opacity: 1, y: 0}}
    transition={{duration:0.5, ease:'easeOut'}}>
      <Herobanner />
      <FilterShop />
      <Whychooseus />
      <Reviewslider reviews={reviews} />
      <Reviewform onSubmit={addReview} /> 
      <Instapost/>    
      <Newsletter />
    </motion.div>
  );
}

export default Home;
