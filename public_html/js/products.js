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
];

let productsBackgroundsContainers = document.querySelectorAll('.products__tiles__list .products__tiles__list__background');

productsBackgroundsContainers.forEach((container, index) => container.style.backgroundImage = `url('img/${backgroundImagesConfig[index]}.jpg')`);