let allProducts = [];
const container = document.getElementById('productContainer');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('error-message');

// 1. API Integration
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error("Network response was not ok");
        
        allProducts = await response.json();
        loading.classList.add('hidden');
        displayProducts(allProducts);
    } catch (error) {
        loading.classList.add('hidden');
        errorMsg.classList.remove('hidden');
        console.error("Fetch Error:", error);
    }
}

// 2. Dynamic UI Rendering
function displayProducts(products) {
    container.innerHTML = "";
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Truncate Title & Description
        const shortTitle = product.title.length > 50 ? product.title.substring(0, 47) + "..." : product.title;
        const shortDesc = product.description.length > 60 ? product.description.substring(0, 57) + "..." : product.description;

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${shortTitle}</h3>
            <p class="price">$${product.price}</p>
            <p class="desc">${shortDesc}</p>
            <button onclick="viewDetails(${product.id})">View More</button>
            <button style="margin-top: 5px; background: #10b981;" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// 4. Functional Requirements & Advanced Features
function viewDetails(id) {
    const product = allProducts.find(p => p.id === id);
    alert(`FULL DETAILS:\n\nTitle: ${product.title}\n\nDescription: ${product.description}\n\nCategory: ${product.category}`);
}

function addToCart(id) {
    const product = allProducts.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
}

// 🔍 Search & Filters
const filterLogic = () => {
    let filtered = [...allProducts];
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sortOrder = document.getElementById('sortPrice').value;

    // Search filter
    if (searchTerm) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm));
    }

    // Category filter
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    // Sorting
    if (sortOrder === 'low') filtered.sort((a, b) => a.price - b.price);
    if (sortOrder === 'high') filtered.sort((a, b) => b.price - a.price);

    displayProducts(filtered);
};

// Event Listeners
document.getElementById('searchInput').addEventListener('input', filterLogic);
document.getElementById('categoryFilter').addEventListener('change', filterLogic);
document.getElementById('sortPrice').addEventListener('change', filterLogic);

// Initialize
fetchProducts();