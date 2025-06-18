import insta1 from '../img/insta1.jpg';
import insta2 from '../img/insta2.jpg';
import insta3 from '../img/insta3.jpg';
import insta4 from '../img/insta4.jpg';
import insta5 from '../img/insta5.jpg';
import insta6 from '../img/insta6.jpg';

function Instapost() {
    return (
        <section className="instagram-feed">
            <h2>Join the Trendsetters</h2>
            <p className="cta">Tag us <strong>@yourbrand</strong> to be featured!</p>
            
            <div className="insta-grid">
                <img src={insta1} alt="Customer wearing product 1" />
                <img src={insta2} alt="Customer wearing product 2" />
                <img src={insta3} alt="Customer wearing product 3" />
                <img src={insta4} alt="Customer wearing product 4" />
                <img src={insta5} alt="Customer wearing product 5" />
                <img src={insta6} alt="Customer wearing product 6" />
            </div>
        </section>
    );
}

export default Instapost;
