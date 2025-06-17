import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function Reviewform({ onSubmit }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text && rating) {
      onSubmit({ name, text, rating });
      setName('');
      setText('');
      setRating(0);
    }
  };

  return (
    <section className='review-form-area two'>
        <h3>Leave a Review</h3>
        <form className="review-form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <textarea
            placeholder="Your Review"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
        />
        <div className="star-input">
            {[1, 2, 3, 4, 5].map((val) => (
            <FaStar
                key={val}
                className={val <= (hover || rating) ? 'star active' : 'star'}
                onClick={() => setRating(val)}
                onMouseEnter={() => setHover(val)}
                onMouseLeave={() => setHover(0)}
            />
            ))}
        </div>
        <button type="submit">Submit Review</button>
        </form>
    </section>
  );
}

export default Reviewform;
