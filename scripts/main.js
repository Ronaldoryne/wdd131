// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Lazy loading for images
    const lazyImages = document.querySelectorAll('.lazy-image');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Update last modified date
    const lastModified = document.getElementById('lastModified');
    if (lastModified) {
        lastModified.textContent = new Date().toLocaleDateString();
    }
});

// products.js
const products = [
    {
        id: 'soap1',
        name: 'Natural Hand Soap',
        description: 'Gentle and effective hand soap with natural ingredients',
        price: '$5.99',
        image: 'images/hand-soap.jpg'
    },
    {
        id: 'soap2',
        name: 'Dish Washing Liquid',
        description: 'Powerful dish soap that cuts through grease',
        price: '$6.99',
        image: 'images/dish-soap.jpg'
    },
    {
        id: 'soap3',
        name: 'Laundry Liquid',
        description: 'Concentrated laundry soap for all fabric types',
        price: '$12.99',
        image: 'images/laundry-soap.jpg'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsGrid) {
        products.forEach(product => {
            const productCard = `
                <div class="feature-card">
                    <img data-src="${product.image}" alt="${product.name}" class="lazy-image">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                    <button class="submit-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
                </div>
            `;
            productsGrid.insertAdjacentHTML('beforeend', productCard);
        });
    }
});

