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

let allTilesArray = document.querySelectorAll('#products__tiles__list li'),
        tilesContainer = document.querySelector('#products__tiles__list'),
        productsBackgroundElement = document.querySelector("#products-background"),
        productsTitleElement = document.querySelector("#products-hiding-title"),
        preloadedImagesArray = new Array();

function preloadBackgroundImages() {
    backgroundImagesConfig.forEach((imageName, index) => {
        preloadedImagesArray[index] = new Image();
        preloadedImagesArray[index].src = `img/${imageName}.jpg`;
    });
}

function setProjectsBackground(index) {
    productsBackgroundElement.style.backgroundImage = `url('${preloadedImagesArray[index].src}')`;
    productsTitleElement.style.opacity = "0";
}

function resetProjectsBackground() {
    productsBackgroundElement.style.backgroundImage = "url('img/products-background.jpg')";
    productsTitleElement.style.opacity = "1";
}

function isHovered(element) {
    return element.parentElement.querySelector(':hover') === element;
}

allTilesArray.forEach((tile, index) => {
    tile.addEventListener("mouseenter", () => {
        setTimeout(() => {
            if (isHovered(tile)) {
                setProjectsBackground(index);
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

window.onload = preloadBackgroundImages;