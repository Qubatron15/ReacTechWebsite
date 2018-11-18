function logSth() {
    console.log('hahahaha');
}

let projectsBackgroundElement = document.querySelector("#projects-background"),
    projectsTitleElement = document.querySelector("#projects-hiding-title");

function resetProjectsBackground() {
    projectsBackgroundElement.style.backgroundImage = "url('img/projects-background.jpg')"; 
//    projectsBackgroundElement.style.opacity = "0";
    projectsTitleElement.style.opacity = "1";
}

function setProjectsBackground() {
    projectsBackgroundElement.style.backgroundImage = "url('img/mikroskop.jpg')"; 
//    projectsBackgroundElement.style.opacity = "1";
    projectsTitleElement.style.opacity = "0";
}

document.querySelector('#reatkory').addEventListener("mouseenter", (event) => {
    console.log('enterrrrrr!!!', event);
    setProjectsBackground();
});

document.querySelector('#reatkory').addEventListener("mouseleave", (event) => {
    console.log('leave', event);
    resetProjectsBackground();
});