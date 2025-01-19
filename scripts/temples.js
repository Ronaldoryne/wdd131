temples.js

// Get the current year
const year = new Date().getFullYear();

// Get the last modified date
const lastModified = document.lastModified;

// Update the footer with the current year and last modified date
document.getElementById("last-modified").textContent = lastModified;

// Add event listener to the hamburger menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});