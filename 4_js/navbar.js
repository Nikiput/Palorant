const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});