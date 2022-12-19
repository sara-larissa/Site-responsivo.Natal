/*========= SHOW MENU ====================================*/
const navMenu = document.getElementById('nav'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* MENU SHOW */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*========= REMOVER MENU MOBILE ==========================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav')
    //Quando o link for clicado a class show-menu será removido
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========= BOX SHADOW NO HEADER =========================*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header')

    if(this.scrollY >= 80){
        scrollHeader.classList.add('scroll-header')
    }else{
        scrollHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)
/*========= SCROLL SECTIONS ACTIVE LINK ==================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrolly = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 160,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========= COUNTDOWN ====================================*/
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const loadingContainer = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const eventDate = new Date('January 08 2023 00:00:00')/**inserir a data do final do evento */

const updateCountdown = () =>{
  const currenTime = new Date()
  const difference = eventDate - currenTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60 ) % 24
  const minutes = Math.floor(difference / 1000 / 60 ) % 60
  const seconds = Math.floor(difference / 1000 ) % 60

  secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
  minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
  hoursContainer.textContent = hours < 10 ? '0' + hours : hours
  daysContainer.textContent = days < 10 ? '0' + days : days
}

setTimeout( () =>{
  loadingContainer.remove()
  countdownContainer.style.display = 'flex'
}, 100)

setInterval(updateCountdown, 1000)

/*=============== SCROLL REVEAL ANIMATION ================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home__content, .section__title, .contact__content`)
sr.reveal(`.section__subtitle`, {interval: 100})
sr.reveal(`.hero__img, .about__img, .donate__title, .discount__img`, {origin: 'left'})
sr.reveal(`.about__content, .donate__img, .discount__content`, {origin: 'right'})
sr.reveal(`.category, .accessory__cards, .contact__form`, {origin: 'bottom'})