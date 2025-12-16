import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './HomePage.css';

function HomePage() {
    const [animated, setAnimated] = useState(false);
    const [email, setEmail] = useState('');

    const features = [
        { 
            title: '🚚 Fast & Free Delivery', 
            desc: 'Free shipping on orders above ₹499. Delivery in 24-48 hours.',
            icon: '🚚'
        },
        { 
            title: '💯 Quality Guarantee', 
            desc: '30-day return policy. 100% authentic products guaranteed.',
            icon: '💯'
        },
        { 
            title: '🔒 Secure Payment', 
            desc: 'Safe & secure payment options. SSL encrypted transactions.',
            icon: '🔒'
        },
        { 
            title: '🛡️ Buyer Protection', 
            desc: 'Full refund if not satisfied. Easy return process.',
            icon: '🛡️'
        },
        { 
            title: '📞 24/7 Support', 
            desc: 'Round-the-clock customer support via chat, email & phone.',
            icon: '📞'
        },
        { 
            title: '💰 Best Price Guarantee', 
            desc: 'Found it cheaper elsewhere? We\'ll match the price.',
            icon: '💰'
        }
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing! Updates will be sent to ${email}`);
            setEmail('');
        } else {
            alert('Please enter a valid email address');
        }
    };

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="title-line">Welcome to BazarNepal</h1>
                    <h2 className="title-line highlight">Your Ultimate Shopping Destination</h2>
                    <p className="hero-subtitle">Discover amazing products at unbeatable prices with exclusive deals</p>
                    <div className="hero-buttons">
                        <Link to="/products" className="cta-button primary">
                            🛍️ Start Shopping
                        </Link>
                    </div>
                </div>
                <div className="hero-background">
                    <div className="background-image"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="section-header">
                    <h2 className="section-title">Why Choose BazarNepal</h2>
                    <p className="section-subtitle">Experience the best in online shopping</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="fnpmeature-item">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter-section">
                <div className="newsletter-container">
                    <div className="newsletter-content">
                        <h2>📧 Stay Updated</h2>
                        <p>Subscribe to our newsletter for exclusive deals and updates</p>
                        <form onSubmit={handleSubscribe} className="newsletter-form">
                            <input type="email" placeholder="Enter your email address" className="newsletter-input"value={email}onChange={(e) => setEmail(e.target.value)}required/>
                            <button type="submit" className="newsletter-button">
                                Subscribe
                            </button>
                        </form>
                        <p className="newsletter-note">No spam, unsubscribe anytime</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;