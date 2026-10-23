const navtoggle = document.querySelector("#nav-toggle");
const navigation = document.querySelector("nav");
const darkmodetoggle = document.querySelector("#dark-mode-toggle");
const savedtheme = localStorage.getItem("theme");
const feedbackForm = document.querySelector("#feedback-form");
const commentInput = document.querySelector("#comment");
const feedbackMessage = document.querySelector("#feedback-message");
const feedbackSubmit = document.querySelector("#feedback-submit");
const mobileView = window.matchMedia("(max-width: 768px)");

if (savedtheme === "dark") {
    document.body.classList.add("dark-mode");
}

//I put it here to allow the users to be able to toggle the navigation bar on or off so only the logo is visible whenever the menu isn't totally needed
//As well as to make it feel more consistent by having the text change during whether the nav was toggled on or off
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

//there was an issue whenever it was hidden on mobile viewport like 768px and 320px, where it would remain hidden in desktop viewport
//I designed it so that the header and nav bar is purposefully a fixed sidebar on desktop viewport so i didn't need to hide the nav viewport for design purposes
//I noticed that if I hid the nav on the mobile viewport and switched to desktop, it would stay hidden there since theres no taggle nav button on desktop view
//So I made this function to reset the visibility of the nav when switching from desktop to mobile viewports.
mobileView.addEventListener("change", function () {
    navigation.classList.remove("hidden");
    navtoggle.setAttribute("aria-expanded", "true");
});

//the same thing as the nav toggle, where its to update the button whenever its light or dark mode, so that it feels consistent
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

//To allow the users to toggle between light and dark mode and be able to save their preference for the next time they visit the site
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

//so that there won't be any inconsistencies across browsers when changing from light and dark mode while you have the page open on
//multiple tabs, so it all stays a consistent mode
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

//Prevents objects with missing info from displaying so I cann make sure all the projects I upload here are in
//full detail from the title, the year, what role i had in the project and the poster for the project.
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

//ensures that only valid projects are to be put on display
const validProjects = projects.filter(isValidProject);

//makes sure that there are no duplicate projects to prevent duplicates from showing up in the portfolio site, this also covers
//lowercaps so even if its lowercaps as long as its the same title it'll get marked as a dupe and only one will show up
const uniqueProjects = validProjects.filter(function (project, index, array) {
    return array.findIndex(function (item) {
        return (
            item.title.trim().toLowerCase() ===
                project.title.trim().toLowerCase() &&
            item.year === project.year
        );
    }) === index;
});

//creates a proper display of the project element from the poster, to title, to the year it was released, and my role in it.
function createProjectElement(project) {
    const listItem = document.createElement("li");
    listItem.classList.add("short-film");

    const figure = document.createElement("figure");

    const poster = document.createElement("img");
    poster.src = project.poster;
    poster.alt = project.title;

//this is so that there's a proper alt text for if ever a broken image link was put or if the image won't load
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

//To control the projects loaded in the page so that users can browse the site and have the projects be in manageable sizes
function displayProjects() {
    if (!filmsList) {
        return;
    }

//So if ever there's a time that the site doesn't have any projects in the list and give some proper feedback to users rather than
//just having an empty projects section
    if (validProjects.length === 0) {
        filmsList.textContent = "No projects are available right now.";
        loadMoreButton.hidden = true;
        return;
    }

//For when ever there's a huge amount of projects in the list, and it won't overflow and load every single one at once and still keep it at a manageable amount
    const nextProjects = validProjects.slice(
        displayedCount,
        displayedCount + projectsPerPage
    );

//So users can load in the next group of project if ever the initial project count shown in the list exceeds 6
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

let isSubmitting = false;

//To give users confirmation or error validation messages
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

//so that you cant submit while a prior comment/feedback is already beinng handled at that moment
    if (isSubmitting) {
        return;
    }

    isSubmitting = true;
    feedbackSubmit.disabled = true;
    feedbackMessage.textContent = "";

//handles the messages themselves on whethere theres an error or the submitted comment was empty or if it was valid
    try {
        const comment = commentInput.value.trim();

        if (comment === "") {
            feedbackMessage.textContent = "No comment provided.";
            return;
        } 
        {
            feedbackMessage.textContent = "Thanks for your comment!"; 
            commentInput.value = "";
        }

    } catch (error) {
        feedbackMessage.textContent =
            "Something went wrong. Please try submitting again.";

        console.error("Feedback submission error:", error);

    } finally {
        isSubmitting = false;
        feedbackSubmit.disabled = false;
    }
});