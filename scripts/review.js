// js/review.js
document.addEventListener('DOMContentLoaded', function() {
    // Get current count from localStorage
    let count = parseInt(localStorage.getItem('reviewCount')) || 0;
    
    // Increment count
    count++;
    
    // Save back to localStorage
    localStorage.setItem('reviewCount', count);
    
    // Display count
    document.getElementById('reviewCount').textContent = count;
});