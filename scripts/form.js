 // Get the current date and time
const currentDate = new Date();

// Format the date and time
const lastModified = currentDate.toLocaleString();

// Update the footer with the last modified date
document.getElementById("last-modified").textContent = lastModified;


 // js/form.js
document.addEventListener('DOMContentLoaded', function() {
    // Populate product select options
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Form validation and submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        // Additional client-side validation could be added here
        console.log('Form submitted');
    });
});


