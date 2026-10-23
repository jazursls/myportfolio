const navtoggle = document.querySelector("#nav-toggle");
const navigation = document.querySelector("nav");
const darkmodetoggle = document.querySelector("#dark-mode-toggle");
const savedtheme = localStorage.getItem("theme");
const mobileView = window.matchMedia("(max-width: 768px)");

if (savedtheme === "dark") {
    document.body.classList.add("dark-mode");
}

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

function updatedarkmodebutton() {
    const isdarkmode = document.body.classList.contains("dark-mode");

    if (isdarkmode) {
        darkmodetoggle.textContent = "Light Mode";
        darkmodetoggle.setAttribute("aria-pressed", "true");
    } else {
        darkmodetoggle.textContent = "Dark Mode";
        darkmodetoggle.setAttribute("aria-pressed", "false");
    }
}

updatedarkmodebutton();

darkmodetoggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isdarkmode = document.body.classList.contains("dark-mode");

    if (isdarkmode) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updatedarkmodebutton();
});


window.addEventListener("storage", function (event) {

    if (event.key === "theme") {

        if (event.newValue === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

    }

});