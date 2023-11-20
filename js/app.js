const menu = document.querySelector('#mobile-menu')
const navbarMenu = document.querySelector('.navbar-menu')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active')
  navbarMenu.classList.toggle('active')
  body.classList.toggle('active')
})

// animation
gsap.registerPlugin(ScrollTrigger)
gsap.from('.animate-hero', {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
})
gsap.to('.animate-hero', {
  duration: 0.6,
  opacity: 1,
  y: 0,
  stagger: 0.3,
})

gsap.from('.animate-services', {
  scrollTrigger: '.animate-services',
  duration: 0.5,
  opacity: 0,
  x: -150,
  stagger: 0.12,
})
gsap.to('.animate-services', {
  scrollTrigger: '.animate-services',
  duration: 0.5,
  opacity: 1,
  x: 0,
  stagger: 0.12,
})

gsap.from('.animate-img', {
  scrollTrigger: '.animate-services',
  duration: 1.2,
  opacity: 0,
  y: -400,
})
gsap.to('.animate-img', {
  scrollTrigger: '.animate-services',
  duration: 1.2,
  opacity: 1,
  y: 0,
})

gsap.from('.animate-memberships', {
  scrollTrigger: '.animate-memberships',
  duration: 0.5,
  opacity: 0,
  y: -150,
  stagger: 0.3,
})

gsap.to('.animate-memberships', {
  scrollTrigger: '.animate-memberships',
  duration: 0.5,
  opacity: 1,
  y: 0,
  stagger: 0.3,
})

gsap.from('.animate-card', {
  scrollTrigger: '.animate-card',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5,
})
gsap.to('.animate-card', {
  scrollTrigger: '.animate-card',
  duration: 1,
  opacity: 1,
  y: 0,
  stagger: 0.3,
  delay: 0.5,
})

gsap.from('.animate-team1', {
  scrollTrigger: '.animate-team1',
  duration: 0.5,
  opacity: 0,
  x: 150,
  stagger: 0.3,
})
gsap.to('.animate-team1', {
  scrollTrigger: '.animate-team1',
  duration: 0.5,
  opacity: 1,
  x: 0,
  stagger: 0.3,
})

gsap.from('.animate-team2', {
  scrollTrigger: '.animate-team2',
  duration: 0.5,
  opacity: 0,
  x: -150,
  stagger: 0.3,
})
gsap.to('.animate-team2', {
  scrollTrigger: '.animate-team2',
  duration: 0.5,
  opacity: 1,
  x: 0,
  stagger: 0.3,
})

gsap.from('.animate-jedan', {
  scrollTrigger: '.animate-jedan',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5,
})

gsap.to('.animate-jedan', {
  scrollTrigger: '.animate-jedan',
  duration: 1,
  opacity: 1,
  y: 0,
  stagger: 0.3,
  delay: 0.5,
})

gsap.from('.animate-janny', {
  scrollTrigger: '.animate-janny',
  duration: 1,
  opacity: 0,
  y: 150,
  stagger: 0.3,
  delay: 0.5,
})

gsap.to('.animate-janny', {
  scrollTrigger: '.animate-janny',
  duration: 1,
  opacity: 1,
  y: 0,
  stagger: 0.3,
  delay: 0.5,
})

gsap.from('.animate-francis', {
  scrollTrigger: '.animate-francis',
  duration: 1,
  opacity: 0,
  x: 150,
  stagger: 0.3,
  delay: 0.5,
})

gsap.to('.animate-francis', {
  scrollTrigger: '.animate-francis',
  duration: 1,
  opacity: 1,
  x: 0,
  stagger: 0.3,
  delay: 0.5,
})

gsap.from('.animate-sarah', {
  scrollTrigger: '.animate-sarah',
  duration: 1,
  opacity: 0,
  x: -150,
  stagger: 0.3,
  delay: 0.5,
})

gsap.to('.animate-sarah', {
  scrollTrigger: '.animate-sarah',
  duration: 1,
  opacity: 1,
  x: 0,
  stagger: 0.3,
  delay: 0.5,
})

gsap.from('.animate-email', {
  scrollTrigger: '.animate-email',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 1,
})

gsap.to('.animate-email', {
  scrollTrigger: '.animate-email',
  duration: 1,
  opacity: 1,
  y: 0,
  stagger: 0.3,
  delay: 1,
})
