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

const projects = [
    {
        title: "Gemma Marie",
        year: 2025,
        poster: "assets/gemmamarie.png",
        role: "Directed"
    },
    {
        title: "One Last Time",
        year: 2026,
        poster: "assets/onelasttime.png",
        role: "Directed"
    },
    {
        title: "Tatlong Hapag",
        year: 2026,
        poster: "assets/tatlonghapag.png",
        role: "Sound Design"
    }
];

const filmsList = document.querySelector("#films-list");
function isValidProject(project) {
    return (
        project &&
        typeof project.title === "string" &&
        project.title.trim() !== "" &&
        Number.isInteger(project.year) &&
        project.year > 0 &&
        typeof project.poster === "string" &&
        project.poster.trim() !== "" &&
        typeof project.role === "string" &&
        project.role.trim() !== ""
    );
}
const uniqueProjects = projects.filter(function (project, index, array) {
    return array.findIndex(function (item) {
        return (
            item.title.trim().toLowerCase() ===
                project.title.trim().toLowerCase() &&
            item.year === project.year
        );
    }) === index;
});

function createProjectElement(project) {
    const listItem = document.createElement("li");
    listItem.classList.add("short-film");

    const figure = document.createElement("figure");

    const poster = document.createElement("img");
    poster.src = project.poster;
    poster.alt = project.title;

    poster.addEventListener("error", function () {
        poster.alt = project.title + " poster unavailable";
        poster.removeAttribute("src");
    }, { once: true });

    const caption = document.createElement("figcaption");
    caption.textContent =
        project.title + " (" + project.year + ") - " + project.role;

    figure.appendChild(poster);
    figure.appendChild(caption);
    listItem.appendChild(figure);

    return listItem;
}

const projectsPerPage = 6;
let displayedCount = 0;

const loadMoreButton = document.createElement("button");
loadMoreButton.type = "button";
loadMoreButton.textContent = "Load More Projects";
loadMoreButton.hidden = true;
loadMoreButton.id = "load-more-projects";

const validProjects = uniqueProjects.filter(isValidProject);

function displayProjects() {
    if (!filmsList) {
        return;
    }

    if (validProjects.length === 0) {
        filmsList.textContent = "No projects are available right now.";
        loadMoreButton.hidden = true;
        return;
    }

    const nextProjects = validProjects.slice(
        displayedCount,
        displayedCount + projectsPerPage
    );

    nextProjects.forEach(function (project) {
        const projectElement = createProjectElement(project);
        filmsList.appendChild(projectElement);
    });

    displayedCount += nextProjects.length;

    loadMoreButton.hidden = displayedCount >= validProjects.length;
}

if (filmsList) {
    filmsList.after(loadMoreButton);
}

loadMoreButton.addEventListener("click", displayProjects);

displayProjects();