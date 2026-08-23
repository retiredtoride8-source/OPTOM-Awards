document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       REVEAL ANIMATIONS
       ========================================================= */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* =========================================================
       INTERACTIVE ADVENTURE MAP
       ========================================================= */

    const countryData = {

        "New Zealand": {
            type: "WORKED HERE",
            text: "Where the Retired to Ride story began. A place of incredible landscapes, unforgettable roads and the meeting that changed everything."
        },

        "Morocco": {
            type: "WORKED HERE",
            text: "A country of colour, contrast and unforgettable experiences. Morocco became another important chapter in a life lived without borders."
        },

        "Spain": {
            type: "WORKED HERE",
            text: "The place they now call home. From here, Retired to Ride continues exploring Europe and sharing new adventures from the open road."
        },

        "Italy": {
            type: "VISITED",
            text: "A country of incredible roads, breathtaking scenery and unforgettable adventures on two wheels."
        },

        "Norway": {
            type: "VISITED",
            text: "Spectacular landscapes, dramatic roads and scenery that makes every mile an adventure."
        },

        "Denmark": {
            type: "VISITED",
            text: "Another memorable stop on the journey, with new roads to explore and stories waiting to be told."
        },

        "Germany": {
            type: "VISITED",
            text: "From beautiful countryside to legendary roads, Germany has been part of the Retired to Ride journey."
        },

        "France": {
            type: "VISITED",
            text: "A country made for exploring, with incredible scenery, winding roads and unforgettable stops along the way."
        },

        "South Africa": {
            type: "WORKED HERE",
            text: "A country that forms an important part of their story, filled with memories, experiences and roads that helped shape the journey."
        },

        "Namibia": {
            type: "WORKED HERE",
            text: "A land of vast open spaces, unforgettable landscapes and adventures that became part of a life lived without borders."
        }

    };


    /* =========================================================
       MODAL ELEMENTS
       ========================================================= */

    const countryModal = document.getElementById("countryModal");

    const modalCountryName = document.getElementById("modalCountryName");

    const modalCountryType = document.getElementById("modalCountryType");

    const modalCountryText = document.getElementById("modalCountryText");

    const countryModalClose = document.getElementById("countryModalClose");

    const countryExploreButton = document.getElementById("countryExploreButton");


    /* =========================================================
       OPEN COUNTRY POPUP
       ========================================================= */

    document.querySelectorAll(".map-hotspot").forEach(function (hotspot) {

        hotspot.addEventListener("click", function () {

            const country = this.dataset.country;

            const data = countryData[country];

            if (!data) return;

            modalCountryName.textContent = country;

            modalCountryType.textContent = data.type;

            modalCountryText.textContent = data.text;

            countryModal.classList.add("active");

        });

    });


    /* =========================================================
       CLOSE COUNTRY POPUP
       ========================================================= */

    countryModalClose.addEventListener("click", function () {

        countryModal.classList.remove("active");

    });


    countryModal.addEventListener("click", function (event) {

        if (event.target === countryModal) {

            countryModal.classList.remove("active");

        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            countryModal.classList.remove("active");

        }

    });

/* =========================================================
   EXPLORE COUNTRY ADVENTURE
   ========================================================= */

countryExploreButton.addEventListener("click", function () {

    const country = modalCountryName.textContent;

    if (country === "New Zealand") {

        window.location.href = "new-zealand.html";

    } else if (country === "Spain") {

        window.location.href = "spain.html";

    } else if (country === "Morocco") {

        window.location.href = "morocco.html";

    } else if (country === "Italy") {

        window.location.href = "italy.html";

    } else if (country === "Norway") {

        window.location.href = "norway.html";

    } else if (country === "Denmark") {

        window.location.href = "denmark.html";

    } else if (country === "Germany") {

        window.location.href = "germany.html";

    } else if (country === "France") {

        window.location.href = "france.html";

    } else if (country === "South Africa") {

        window.location.href = "south-africa.html";

    } else if (country === "Namibia") {

        window.location.href = "namibia.html";

    }

});

});






