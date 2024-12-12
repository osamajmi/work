var pyemt = document.getElementById("details"); 
var priceDetail = document.getElementById("pDetail");

pyemt.addEventListener("click", () => {
    if (priceDetail.classList.contains("open")) {
        // Close the details
        priceDetail.classList.remove("open");
        pyemt.classList.remove("bi-dash");
        pyemt.classList.add("bi-plus");
    } else {
        // Open the details
        priceDetail.classList.add("open");
        pyemt.classList.remove("bi-plus");
        pyemt.classList.add("bi-dash");
    }
});