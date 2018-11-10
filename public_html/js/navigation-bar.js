let mainNavLinks = document.querySelectorAll("#navigation ul li a"),
        websiteSections = document.querySelectorAll("section"),
        navbarContainer = document.getElementById("navigation__links-container"),
        navbarOffset = navbarContainer.offsetTop;


function setActiveNavLink() {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add("selected");
        } else {
            link.classList.remove("selected");
        }
    });
}

function stickNavbarToTop() {
    if (window.pageYOffset >= navbarOffset) {
        navbarContainer.classList.add("navigation-fixed-top");
    } else {
        navbarContainer.classList.remove("navigation-fixed-top");
    }
}

window.addEventListener("scroll", () => {
    setActiveNavLink();
    stickNavbarToTop();
});

setActiveNavLink();