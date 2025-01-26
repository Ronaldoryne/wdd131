// Get current year and last modified date
const year = new Date().getFullYear();
const lastModifiedDate = document.lastModified;

// Display current year and last modified date in footer
document.getElementById("copyright-year").textContent = year;
document.getElementById("last-modified").textContent = `Last modified: ${lastModifiedDate}`;
