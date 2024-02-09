//  parallax effect (project background)

const projects = document.querySelector("#projects");

window.addEventListener("scroll", function() {
  let offset = window.scrollY;
  projects.style.backgroundPositionY = offset * 0.7 + "px";
})



//  click btn -> diplay project cards

const projectList = [
  "photoAlbum", "museum", "project3"
];

const projectButtons = document.querySelectorAll('button.projectBtn');
for (let button of projectButtons) {
  button.addEventListener('click', colorize);
}

function colorize() {
  const selectedProjectId = this.value;   //links this.btn to card
  document.querySelector(`#${selectedProjectId}`).style.display = "block";
  for (let project of projectList) {
    if (project !== selectedProjectId) {
      document.querySelector(`#${project}`).style.display = "none";
    }
  }
}