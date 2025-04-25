document.getElementById("left").onclick = previous;
document.getElementById("right").onclick = next;

let projectTitles = ["PyUI", "LED Matrix", "Robotic Arm", "Wifi-enabled Camera"];
let projectImages = ["Assets/Python-Logo.png","Assets/download.jpg","Assets/images.jpg","Assets/canon_eosr8.jpg"];

let currentProject = 0;
let carousel = document.getElementById("project-carousel");
let text = document.getElementById("project-carousel").children[0]

function previous() {
    currentProject--;
    if (currentProject < 0) {
        currentProject = projectTitles.length - 1;
    }
    console.log(currentProject);
    carousel.style.backgroundImage = `url(${projectImages[currentProject]})`;
    text.innerHTML = projectTitles[currentProject];
}

function next() {
    currentProject++;
    if (currentProject == projectTitles.length) {
        currentProject = 0;
    }
    console.log(currentProject);
    carousel.style.backgroundImage = `url(${projectImages[currentProject]})`;
    text.innerHTML = projectTitles[currentProject];
}