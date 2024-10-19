const navbar = document.querySelector('#scrollFixNavbar');
// console.log(navbar);
// navbar.style.transition = 'background 1s ease';
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 40 && window.scrollY < window.innerHeight) {
//         // console.log(window.scrollY);
//         navbar.style.background = 'linear-gradient(104.36deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))';
//         navbar.style.transition = 'background 1s ease';
//         navbar.classList.remove("text-bg-transition-primary-100");


//     } else if (window.scrollY >= window.innerHeight) {
//         // console.log(window.scrollY);
//         navbar.style.background = 'rgba(0, 0, 0,0)';
//         navbar.classList.add("text-bg-transition-primary-100");
//     } else {
//         navbar.classList.remove("text-bg-transition-primary-100");
//         navbar.style.background = 'rgba(0, 0, 0,0)';
//     }
// })

window.addEventListener("scroll", () => {
    let pageName = window.location.toString().split('/');
    if (pageName[pageName.length - 1].includes('index.html') || pageName[pageName.length - 2].includes('HS_sideProject_zoneBookstore')) {
        if (window.scrollY >= window.innerHeight) {
            navbar.classList.add("text-bg-transition-primary-100");
            navbar.style.boxShadow = "-1px 12px 8px 0px rgba(186, 186, 186,0.2)";
        } else {
            navbar.classList.remove("text-bg-transition-primary-100");
            navbar.style.boxShadow = "0 0 0 0 rgba(186, 186, 186, 0.2)";
        }
    } else {
        if (window.scrollY > 40) {
            navbar.style.background = 'linear-gradient(104.36deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2))';
        } else {
            navbar.style.background = 'rgba(0, 0, 0,0)';
        }
    }
})