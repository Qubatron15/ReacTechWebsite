const backgroundImagesConfig = [
    'dust',
    'dust',
    'chemicals',
    'indicator',
    'indicator',
    'indicator',
    'microscope',
    'fire',
    'tubing'
],
        transitionAnimationDuration = 1000;

let allTilesArray = document.querySelectorAll('#projects__tiles__list li'),
        tilesContainer = document.querySelector('#projects__tiles__list'),
        projectsBackgroundElement = document.querySelector("#projects-background"),
        projectsTitleElement = document.querySelector("#projects-hiding-title");


function setProjectsBackground(backgroundImage) {
    projectsBackgroundElement.style.backgroundImage = `url('img/${backgroundImage}.jpg')`;
    projectsTitleElement.style.opacity = "0";
}

function resetProjectsBackground() {
    projectsBackgroundElement.style.backgroundImage = "url('img/projects-background.jpg')";
    projectsTitleElement.style.opacity = "1";
}

function isHovered(element) {
    return element.parentElement.querySelector(':hover') === element;
}

allTilesArray.forEach((tile, index) => {
    tile.addEventListener("mouseenter", () => {
        setTimeout(() => {
            if (isHovered(tile)) {
                setProjectsBackground(backgroundImagesConfig[index]);
            }
        }, transitionAnimationDuration);
    });
});

tilesContainer.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!isHovered(tilesContainer)) {
            resetProjectsBackground();
        }
    }, transitionAnimationDuration);
});