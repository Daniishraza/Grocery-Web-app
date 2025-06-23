/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        const navMenuLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(navMenuLink){
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navMenuLink.classList.add('active-link')
            }else{
                navMenuLink.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '30px',
        duration: 2000,
        reset: true
    });

    sr.reveal(`.home__data, .home__img,
                .about__data, .about__img,
                .products__content, .menu__content,
                .app__data, .app__img,
                .contact__data, .contact__button,
                .newsletter__container,
                .faq__container, .faq__item,
                .testimonials__container, .testimonial__content,
                .footer__content`, {
        interval: 200
    })
}

/*==================== SMOOTH SCROLL ====================*/ 
const scrollTopBtn = document.getElementById('scroll-top');
if(scrollTopBtn){
    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}

/*==================== NEWSLETTER FORM HANDLING (Optional) ====================*/
const newsletterForm = document.querySelector('.newsletter__form');
if(newsletterForm){
    newsletterForm.addEventListener('submit', function(e){
        e.preventDefault();
        const input = newsletterForm.querySelector('.newsletter__input');
        if(input && input.value){
            // You can add AJAX here or show a success message
            input.value = '';
            alert('Thank you for subscribing!');
        }
    });
}