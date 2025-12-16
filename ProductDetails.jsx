import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from './CartContext.jsx'; // Import useCart
import './ProductDetails.css';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart(); 
    
    const products = [
        { 
            id: 1, 
            name: 'MacBook Pro', 
            price: 104999, 
            category: 'Electronics',
            description: 'Powerful laptop for professionals with M2 chip',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop',
            fullDescription: 'The MacBook Pro is a high-performance laptop designed for professionals.',           
            brand: 'Apple',
            warranty: '1 Year',
            color: 'Space Gray',
            weight: '1.6 kg',
            dimensions: '35.79 x 24.59 x 1.68 cm'
        },
        { 
            id: 2, 
            name: 'Wireless Headphones', 
            price: 15999, 
            category: 'Electronics',
            description: 'Noise-cancelling wireless headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
            fullDescription: 'Experience crystal-clear audio with these premium wireless headphones.',
            brand: 'SoundMaster',
            warranty: '2 Years',
            color: 'Black',
            weight: '265g',
            dimensions: '18 x 16 x 8 cm'
        },
        { 
            id: 3, 
            name: 'Cotton T-Shirt', 
            price: 899, 
            category: 'Clothing',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop',
            fullDescription: 'Made from 100% premium cotton, this t-shirt offers unmatched comfort.',
            brand: 'ComfortWear',
            warranty: 'None',
            color: 'White',
            weight: '180g',
            dimensions: 'One Size'
        },
        { 
            id: 4, 
            name: 'Ceramic Coffee Mug', 
            price: 499, 
            category: 'Home',
            description: 'Beautiful ceramic mug for your morning coffee',
            image: 'https://th.bing.com/th/id/OIP.2BHrFf9vqSNb66SYinvrywHaGM?w=231&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            fullDescription: 'Start your day right with this elegant ceramic mug.',           
            brand: 'HomeEssentials',
            warranty: '6 Months',
            color: 'White',
            weight: '350g',
            dimensions: '10 x 9 x 8 cm'
        },
        { 
            id: 5, 
            name: 'JavaScript Book', 
            price: 999, 
            category: 'Books',
            description: 'Complete guide to modern JavaScript',
            image: 'https://th.bing.com/th/id/OIP.GfelemDaHNEXvXGvLBN4tAHaLO?w=121&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            fullDescription: 'Master JavaScript from basics to advanced concepts.',           
            brand: 'TechPress',
            warranty: 'None',
            color: 'N/A',
            weight: '850g',
            dimensions: '23.5 x 19 x 3 cm'
        },
        { 
            id: 6, 
            name: 'Smart Watch', 
            price: 23999, 
            category: 'Accessories',
            description: 'Fitness tracker with heart rate monitor',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
            fullDescription: 'Track your fitness goals with this advanced smart watch.',           
            brand: 'FitTrack',
            warranty: '1 Year',
            color: 'Midnight Blue',
            weight: '42g',
            dimensions: '4.5 x 3.8 x 1.1 cm'
        },
        { 
            id: 7, 
            name: 'Gaming Console', 
            price: 41999, 
            category: 'Electronics',
            description: 'Next-gen gaming console',
            image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop',
            fullDescription: 'Experience next-generation gaming with this powerful console.',           
            brand: 'GamePro',
            warranty: '1 Year',
            color: 'White',
            weight: '4.5 kg',
            dimensions: '39 x 10.4 x 26 cm'
        },
        { 
            id: 8, 
            name: 'Running Shoes', 
            price: 3499, 
            category: 'Footwear',
            description: 'Comfortable running shoes with cushioning',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
            fullDescription: 'Designed for runners, these shoes provide excellent cushioning and support.',
            brand: 'RunFast',
            warranty: '6 Months',
            color: 'Black/Red',
            weight: '280g',
            dimensions: 'Standard shoe size'
        },
        { 
            id: 9, 
            name: 'Smartphone', 
            price: 65999, 
            category: 'Electronics',
            description: 'Latest smartphone with advanced camera',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop',
            fullDescription: 'Stay connected with this cutting-edge smartphone & Features a stunning display.',          
            brand: 'TechPhone',
            warranty: '2 Years',
            color: 'Midnight Black',
            weight: '198g',
            dimensions: '16.4 x 7.6 x 0.9 cm'
        },
        { 
            id: 10, 
            name: 'Backpack', 
            price: 1799, 
            category: 'Accessories',
            description: 'Durable backpack for everyday use',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop',
            fullDescription: 'This versatile backpack combines style and functionality.',           
            brand: 'UrbanGear',
            warranty: '1 Year',
            color: 'Gray',
            weight: '750g',
            dimensions: '45 x 30 x 15 cm'
        },
        { 
            id: 11, 
            name: 'Coffee Maker', 
            price: 8999, 
            category: 'Home',
            description: 'Programmable coffee maker',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
            fullDescription: 'Brew the perfect cup of coffee every time with this programmable coffee maker.',           
            brand: 'BrewMaster',
            warranty: '2 Years',
            color: 'Silver',
            weight: '3.2 kg',
            dimensions: '33 x 25 x 36 cm'
        },
        { 
            id: 12, 
            name: 'Desk Lamp', 
            price: 1299, 
            category: 'Home',
            description: 'Adjustable LED desk lamp',
            image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop',
            fullDescription: 'Illuminate your workspace with this energy-efficient LED desk lamp.',
            brand: 'LightWorks',
            warranty: '1 Year',
            color: 'White',
            weight: '850g',
            dimensions: '50 x 25 x 15 cm'
        }
    ];
    const product = products.find(p => p.id === parseInt(id));
    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert(`Added ${quantity} ${product.name}(s) to cart!\nTotal: ₹${(product.price * quantity)}`);
    };
    const handleBuyNow = () => {
        addToCart(product, quantity);
        navigate('/cart');
    };

    return (
        <div className="product-details-page">
            <button className="back-button" onClick={() => navigate('/products')}>
                ← Back to Products
            </button>
            
            <div className="product-details-container">
                <div className="product-image-section">
                    <div className="product-main-image">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            loading="slow"
                        />
                    </div>
                </div>       
                <div className="product-info-section">
                    <div className="product-header">
                        <h1>{product.name}</h1>
                    </div>
                    <p className="product-price">₹{product.price}</p>                   
                    <p className="product-description">{product.fullDescription}</p>                   
                    <div className="product-specs">
                        <h3>Product Specifications</h3>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <span className="spec-label">Brand:</span>
                                <span className="spec-value">{product.brand}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Category:</span>
                                <span className="spec-value">{product.category}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Color:</span>
                                <span className="spec-value">{product.color}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Warranty:</span>
                                <span className="spec-value">{product.warranty}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Weight:</span>
                                <span className="spec-value">{product.weight}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-label">Dimensions:</span>
                                <span className="spec-value">{product.dimensions}</span>
                            </div>
                        </div>
                    </div>
                    
                                
                        <div className="cart-actions">
                            <button 
                                className="add-to-cart-btn"
                                onClick={handleAddToCart}
                            >
                                🛒 Add to Cart
                            </button>
                            <button 
                                className="buy-now-btn"
                                onClick={handleBuyNow}
                            >
                                ⚡ Buy Now
                            </button>
                        </div>
                    
                    
                </div>
            </div>
           
        </div>
    );
}

export default ProductDetails;