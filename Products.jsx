import { Link } from 'react-router-dom';
import './Products.css';

function Products() {
    const products = [
        { 
            id: 1, 
            name: 'MacBook Pro', 
            price: 104999, 
            category: 'Electronics',
            image: 'https://th.bing.com/th/id/OIP.0acevoX0jIWh-IFuacyAMQHaE8?w=244&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1',
            details: '16GB RAM, 512GB SSD, 16-inch Retina Display, M2 Chip, 8-Core CPU, 10-Core GPU',
            inStock: true,
            rating: 4.8
        },
        { 
            id: 2, 
            name: 'Wireless Headphones', 
            price: 15999, 
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
            details: '30hr battery, Bluetooth 5.0, Built-in mic, Foldable design',
            inStock: true,
            rating: 4.5
        },
        { 
            id: 3, 
            name: 'Cotton T-Shirt', 
            price: 899, 
            category: 'Clothing',
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
            details: '100% Cotton, Machine washable, Available in S-XXL',
            inStock: true,
            rating: 4.3
        },
        { 
            id: 4, 
            name: 'Ceramic Coffee Mug', 
            price: 499, 
            category: 'Home',
            image: 'https://th.bing.com/th/id/OIP.2BHrFf9vqSNb66SYinvrywHaGM?w=231&h=193&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            details: '350ml capacity, Microwave safe, Dishwasher safe',
            inStock: true,
            rating: 4.7
        },
        { 
            id: 5, 
            name: 'JavaScript Book', 
            price: 999, 
            category: 'Books',
            image: 'https://th.bing.com/th/id/OIP.GfelemDaHNEXvXGvLBN4tAHaLO?w=121&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            details: '500 pages, Latest ES6+ features, Coding exercises',
            inStock: true,
            rating: 4.9
        },
        { 
            id: 6, 
            name: 'Smart Watch', 
            price: 23999, 
            category: 'Accessories',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
            details: 'Water resistant, GPS, Sleep tracking, 7-day battery',
            inStock: true,
            rating: 4.6
        },
        { 
            id: 7, 
            name: 'Gaming Console', 
            price: 41999, 
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop',
            details: '4K gaming, 1TB SSD, Ray tracing support',
            inStock: true,
            rating: 4.7
        },
        { 
            id: 8, 
            name: 'Running Shoes', 
            price: 3499, 
            category: 'Footwear',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
            details: 'Breathable mesh, Rubber sole, Arch support',
            inStock: true,
            rating: 4.4
        },
        { 
            id: 9, 
            name: 'Smartphone', 
            price: 65999, 
            category: 'Electronics',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
            details: '128GB storage, Triple camera, 5G support',
            inStock: true,
            rating: 4.8
        },
        { 
            id: 10, 
            name: 'Backpack', 
            price: 1799, 
            category: 'Accessories',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
            details: 'Water-resistant, Laptop compartment, Multiple pockets',
            inStock: true,
            rating: 4.5
        },
        { 
            id: 11, 
            name: 'Coffee Maker', 
            price: 8999, 
            category: 'Home',
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
            details: '12-cup capacity, Programmable timer, Auto shut-off',
            inStock: true,
            rating: 4.6
        },
        { 
            id: 12, 
            name: 'Desk Lamp', 
            price: 1299, 
            category: 'Home',
            description: 'Adjustable LED desk lamp',
            image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
            details: 'LED lights, Adjustable brightness, USB port',
            inStock: true,
            rating: 4.2
        }
    ];

    return (
        <div className="products-page">
            <h1>Our Products</h1>
                <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">
                            <img src={product.image} alt={product.name}/>
                        </div>                  
                        <Link to={`/product/${product.id}`} className="product-name-link">
                            <h3>{product.name}</h3>
                        </Link>                      
                        <p className="price">₹{product.price}</p>
                        <div className="product-actions">                            
                            <Link to={`/product/${product.id}`}>
                                <button className="view-details">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;