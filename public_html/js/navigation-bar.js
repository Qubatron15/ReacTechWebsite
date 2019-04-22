let mainNavLinks = document.querySelectorAll("#navigation ul li a"),
    websiteSections = document.querySelectorAll("section"),
    navbar = document.querySelector("#navigation nav"),
    navbarContainer = document.querySelector("#navigation"),
    navbarOffset;


function setActiveNavLink() {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= fromTop + 5 && section.offsetTop + section.offsetHeight > fromTop + 5) {
            link.classList.add("selected");
        } else {
            link.classList.remove("selected");
        }
    });
}

function stickNavbarToTop() {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add("navigation-fixed-top");
    } else {
        navbar.classList.remove("navigation-fixed-top");
    }
}

function refreshNavbarOffset() {
    navbarOffset = navbarContainer.offsetTop;
}

window.addEventListener("scroll", () => {
    setActiveNavLink();
    stickNavbarToTop();
});

window.addEventListener("resize", () => {
    refreshNavbarOffset();
});

refreshNavbarOffset();

setActiveNavLink();