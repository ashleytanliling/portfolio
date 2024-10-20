//  parallax effect (project background)

const projects = document.querySelector("#projects");

window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  projects.style.backgroundPositionY = offset * 0.7 + "px";
});

//  click btn -> diplay project cards

const projectList = ["happyCafe", "photoAlbum", "museum", "project3"];

const projectButtons = document.querySelectorAll("button.projectBtn");
for (let button of projectButtons) {
  button.addEventListener("click", colorize);
}

function colorize() {
  const selectedProjectId = this.value; //links this.btn to card
  document.querySelector(`#${selectedProjectId}`).style.display = "block";
  document.querySelector(`#${selectedProjectId}`).classList.add("fadeIn");
  for (let project of projectList) {
    if (project !== selectedProjectId) {
      document.querySelector(`#${project}`).style.display = "none";
    }
  }
}

//  dark mode

const darkMode = document.querySelector(".darkMode");

darkMode.addEventListener("click", function () {
  document.body.classList.toggle("darkMode");
  if (darkMode.textContent === "Dark Mode") {
    darkMode.textContent = "Light Mode";
  } else {
    darkMode.textContent = "Dark Mode";
  }
});

//  initialize Bootstrap Tooltip

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
