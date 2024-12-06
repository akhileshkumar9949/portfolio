// Initialize EmailJS
(function() {
    emailjs.init("PR66_TFPIXDiTawuw");
})();

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_55k7gph', 'template_mqrwvij', this)
        .then(function(response) {
            document.getElementById('contact-message').innerText = 'Message sent successfully!';
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('contact-message').innerText = 'Oops! Something went wrong. Please try again.';
            console.error('EmailJS error:', error);
        });
});

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Menu Show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu Hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove Menu Mobile
const navItems = document.querySelectorAll('.nav_item');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
}
navItems.forEach(n => n.addEventListener('click', linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects_container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial_container", {
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal(`.home_data, .projects_container, .testimonial_container, .footer_container`);
sr.reveal(`.home_info div`, { delay: 600, origin: 'bottom', interval: 100 });
sr.reveal(`.skills_content:nth-child(1), .contact_content:nth-child(1)`, { origin: 'left' });
sr.reveal(`.skills_content:nth-child(2), .contact_content:nth-child(2)`, { origin: 'right' });
sr.reveal(`.qualification_content, .services_card`, { interval: 100 });
