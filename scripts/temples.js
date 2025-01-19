// Get the current date and time
const currentDate = new Date();

// Format the date and time
const lastModified = currentDate.toLocaleString();

// Update the footer with the last modified date
document.getElementById("last-modified").textContent = lastModified;


