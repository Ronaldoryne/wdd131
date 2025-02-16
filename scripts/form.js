 // Get the current date and time
 const currentDate = new Date();

 // Format the date and time
 const options = { 
     year: 'numeric', 
     month: 'long', 
     day: 'numeric',
     hour: '2-digit',
     minute: '2-digit',
     second: '2-digit'
 };
 
 const lastModified = currentDate.toLocaleDateString('en-US', options);

 // Update the footer with the last modified date
 const lastModifiedElement = document.getElementById('lastModified');
 if (lastModifiedElement) {
     lastModifiedElement.textContent = lastModified;
 }

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


