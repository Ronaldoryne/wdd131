document.addEventListener("DOMContentLoaded", function () {
  const copyrightYear = new Date().getFullYear();
  document.querySelector("footer p:first-child").textContent = `Copyright ${copyrightYear}`;
  const lastModified = document.lastModified;
  document.querySelector("footer p:nth-child(2)").textContent = `Last modified: ${lastModified}`;
});



