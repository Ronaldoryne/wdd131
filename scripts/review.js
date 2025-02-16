const countElement = document.getElementById('reviewCount');
if (countElement) {
    countElement.textContent = count;
}

// Display latest review details if available
if (latestReview) {
    const product = products.find(p => p.id === latestReview.productId);
    if (product) {
        document.getElementById('reviewDetails').innerHTML = `
            <h2>Thank you for your review!</h2>
            <p>Product: ${product.name}</p>
            <p>Rating: ${latestReview.rating} stars</p>
            <p>Installation Date: ${new Date(latestReview.installDate).toLocaleDateString()}</p>
            ${latestReview.userName ? `<p>Reviewed by: ${latestReview.userName}</p>` : ''}
        `;
    }
}
});