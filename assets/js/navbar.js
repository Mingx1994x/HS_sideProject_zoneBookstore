const navbar = document.querySelector('#scrollFixNavbar');
console.log(navbar);
window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight) {
        // console.log(window.scrollY);
        navbar.classList.add("text-bg-transition-primary-100")
    } else {
        navbar.classList.remove("text-bg-transition-primary-100")
    }
})