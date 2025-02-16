const products = [
  {
    name: 'Handy Andy',
    price: '$5.99'
  },
  {
    name: 'Pine Gel',
    price: '$6.99'
  },
  {
    name: 'Lavender',
    price: '$7.99'
  },
  {
    name: 'Dishwasher',
    price: '$8.99'
  },
  {
    name: 'Bleach',
    price: '$9.99'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    products.forEach((product, index) => {
      const imageElement = document.getElementById(`image${index + 1}`);
      const nameElement = document.getElementById(`name${index + 1}`);
      const priceElement = document.getElementById(`price${index + 1}`);
      
      nameElement.textContent = product.name;
      priceElement.textContent = product.price;
      
      // Add margin to images for spacing
      imageElement.style.marginBottom = '20px';
    });
  }
});





