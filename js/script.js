const navtoggle = document.querySelector("#nav-toggle");
const navigation = document.querySelector("nav");
const mobileView = window.matchMedia("(max-width: 768px)");

navtoggle.addEventListener("click", function () {
    if (mobileView.matches) {
        navigation.classList.toggle("hidden");

        const isExpanded = !navigation.classList.contains("hidden");

        navtoggle.setAttribute("aria-expanded", isExpanded);

        if (isExpanded) {
            navtoggle.textContent = "Untoggle Nav";
        } else {
            navtoggle.textContent = "Toggle Nav";
        }
    }
});

mobileView.addEventListener("change", function () {
    navigation.classList.remove("hidden");
    navtoggle.setAttribute("aria-expanded", "true");
});