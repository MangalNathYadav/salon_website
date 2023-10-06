window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const body = document.body;

    body.classList.add("loaded");

    setTimeout(function() {
        loadingScreen.style.display = "none";
    }, 500); // Hide after 500 milliseconds (0.5 seconds)

    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // JavaScript to enable horizontal scrolling for services cards
    window.addEventListener("DOMContentLoaded", function() {
        const servicesContainer = document.querySelector(".services-container");

        // Calculate the total width of the services container
        let totalWidth = 0;
        const serviceCards = document.querySelectorAll(".service-card");
        serviceCards.forEach(function(card) {
            totalWidth += card.offsetWidth;
        });

        // Set the width of the services container to the total width
        servicesContainer.style.width = totalWidth + "px";
    });
});