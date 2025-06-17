import { FaStar } from 'react-icons/fa';

function Reviewslider({ reviews }) {
  return (
    <section className='review-slider-area'>
        <div className="review-slider">
            <h2>What Our Customers Say</h2>
            <div className="slider-track">
                {[...reviews, ...reviews].map((review, idx) => (
                <div className="review-card" key={idx}>
                    <div className="stars">
                    {[1, 2, 3, 4, 5].map((val) => (
                        <FaStar
                        key={val}
                        className={val <= review.rating ? 'star active' : 'star'}
                        />
                    ))}
                    </div>
                    <p className="review-text">"{review.text}"</p>
                    <h4>- {review.name}</h4>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Reviewslider;
