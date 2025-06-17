import { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <div className='one news-letter-area'>
            <section className="news-letter">
                {!submitted ? (
                    <>
                        <p>Join our community and get 10% off your first order</p>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </>
                ) : (
                    <p>🎉 Thanks for signing up!</p>
                )}
            </section>
        </div>
    );
}

export default Newsletter;
