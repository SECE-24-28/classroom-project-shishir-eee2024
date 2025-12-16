const API_URL = 'http://localhost:5000/api';

// Helper function for API calls
async function fetchAPI(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }
  
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'API request failed');
  }
  
  return data;
}

// Auth API
export const authAPI = {
  register: async (userData) => {
    return fetchAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  login: async (email, password) => {
    return fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
  
  getProfile: async () => {
    return fetchAPI('/auth/profile');
  },
  
  updateProfile: async (userData) => {
    return fetchAPI('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },
};

// Products API
export const productAPI = {
  getAll: async (filters = {}) => {
    const queryParams = new URLSearchParams(filters).toString();
    return fetchAPI(`/products${queryParams ? `?${queryParams}` : ''}`);
  },
  
  getById: async (id) => {
    return fetchAPI(`/products/${id}`);
  },
  
  getFeatured: async () => {
    return fetchAPI('/products/featured');
  },
  
  getByCategory: async (category) => {
    return fetchAPI(`/products/category/${category}`);
  },
};

// Cart API
export const cartAPI = {
  getCart: async () => {
    return fetchAPI('/cart');
  },
  
  addToCart: async (productId, quantity = 1) => {
    return fetchAPI('/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity }),
    });
  },
  
  updateCartItem: async (itemId, quantity) => {
    return fetchAPI(`/cart/update/${itemId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
  },
  
  removeFromCart: async (itemId) => {
    return fetchAPI(`/cart/remove/${itemId}`, {
      method: 'DELETE',
    });
  },
  
  clearCart: async () => {
    return fetchAPI('/cart/clear', {
      method: 'DELETE',
    });
  },
};

// Orders API
export const orderAPI = {
  createOrder: async (orderData) => {
    return fetchAPI('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  },
  
  getMyOrders: async () => {
    return fetchAPI('/orders/myorders');
  },
  
  getOrderById: async (id) => {
    return fetchAPI(`/orders/${id}`);
  },
};

// Health check
export const healthCheck = async () => {
  return fetchAPI('/health');
};

export default {
  auth: authAPI,
  products: productAPI,
  cart: cartAPI,
  orders: orderAPI,
  healthCheck,
};