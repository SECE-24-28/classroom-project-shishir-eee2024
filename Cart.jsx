import { useCart } from './CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart() {
    const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice
    } = useCart();
    
    const navigate = useNavigate();
    
    const handleQuantityChange = (itemId, change) => {
         const item = cartItems.find(item => item.id === itemId);
        if (item) {
            const newQuantity = item.quantity + change;
            if (newQuantity >= 1) {
                updateQuantity(itemId, newQuantity);
            }
        }
    };
    
    const handleRemoveItem = (itemId) => {
        if (window.confirm('Are you sure you want to remove this item from cart?')) {
            removeFromCart(itemId);
        }
    };
    
    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        alert('Proceeding to checkout!');
    
    };
    
    const shippingCost = cartItems.length > 0 ? 99 : 0;
    const totalPrice = getTotalPrice();
    const finalTotal = totalPrice + shippingCost;

    return (
        <div className="cart-page">
            <h1>Your Shopping Cart</h1>
            
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <h2>🛒 Your cart is empty</h2>
                    <p>Looks like you haven't added any items to your cart yet.</p>
                    <button className="continue-shopping-btn" onClick={() => navigate('/products')}>Continue Shopping</button>
                </div>
            ) : (
                <>
                    <div className="cart-container">
                        <div className="cart-items-section">
                            <h2>Cart Items ({cartItems.length})</h2>
                            <div className="cart-items">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <div className="item-image">
                                            <img src={item.image} alt={item.name}loading="slow"/>
                                        </div>
                                        <div className="item-details">
                                            <h3>{item.name}</h3>
                                            <p className="item-price">₹{item.price}</p>
                                            <div className="item-quantity">
                                                <button onClick={() => handleQuantityChange(item.id, -1)}disabled={item.quantity <= 1}>−</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                            </div>
                                        </div>
                                        <div className="item-total">
                                            <p>Total: ₹{(item.price * item.quantity)}</p>
                                            <button className="remove-btn"onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-details">
                                <div className="summary-row">
                                    <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                                    <span>₹{totalPrice}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>₹{shippingCost}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Tax (18%)</span>
                                    <span>₹{(totalPrice * 0.18)}</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total Amount</span>
                                    <span>₹{finalTotal}</span>
                                </div>
                            </div>
                            <button className="checkout-btn"onClick={handleCheckout}>Proceed to Checkout</button>
                            <p className="secure-checkout">🔒 Secure checkout</p>
                        </div>
                    </div>
                    
                    <div className="cart-actions">
                            <button className="continue-shopping-btn bottom"onClick={() => navigate('/products')}>← Continue Shopping</button>
                        <button className="clear-cart-btn bottom"onClick={() => {if (window.confirm('Are you sure you want to clear your cart?')) {clearCart();}}}>Clear Cart</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;