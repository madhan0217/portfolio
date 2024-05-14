// scroll
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
})

sr.reveal('.home-content',{delay: 200, origin: 'top'})
sr.reveal('.home-img',{delay: 200, origin: 'top'})
sr.reveal('.about',{delay: 1000, origin: 'left'})
sr.reveal('.about-title',{delay: 1000, origin: 'left'})
sr.reveal('.about-title',{delay: 1000, origin: 'left'})
sr.reveal('.portfolio-title',{delay: 1000, origin: 'left'})
sr.reveal('.down-cv',{delay: 1200, origin: 'top'})
sr.reveal('.line',{delay: 1200, origin: 'top'})
sr.reveal('.skill',{delay: 600, origin: 'top'})
sr.reveal('.content1',{delay: 800, origin: 'left'})
sr.reveal('.skill-heading',{delay: 800, origin: 'down'})
sr.reveal('.skill-bar',{delay: 1000, origin: 'left'})
sr.reveal('.content2',{delay: 800, origin: 'right'})
sr.reveal('.portfolio',{delay: 1000, origin: 'left'})
sr.reveal('.card',{delay: 1200, origin: 'top'})
sr.reveal('.contact',{delay: 1000, origin: 'left'})
sr.reveal('.contact-name',{delay: 1200, origin: 'left'})
sr.reveal('.contact-phone',{delay: 1500, origin: 'left'})
sr.reveal('.contact-mail',{delay: 1800, origin: 'left'})
sr.reveal('.contact-address',{delay: 2000, origin: 'left'})
sr.reveal('.contact-name',{delay: 1200, origin: 'left'})
sr.reveal('.form-contact-1',{delay: 1500, origin: 'left'})
sr.reveal('.form-contact-2',{delay: 1800, origin: 'top'})
sr.reveal('.form-contact-3',{delay: 2000, origin: 'top'})
sr.reveal('.form-contact-4',{delay: 2000, origin: 'top'})



//header
let header = document.querySelector("header");

window.addEventListener("scroll", () =>{
    header.classList.toggle("shadow", window.scrollY > 0);
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Frontend Developer", "DevOps Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  })

//   scroll-up