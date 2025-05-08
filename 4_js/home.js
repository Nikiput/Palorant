let items = document.querySelectorAll('.slider .item');
let background = document.getElementById('background');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;

function showSlider() {
    items.forEach((item, i) => {
        item.classList.remove("active", "left", "right");
    });

    let left = active - 1 < 0 ? items.length - 1 : active - 1;
    let right = active + 1 >= items.length ? 0 : active + 1;

    items[active].classList.add("active");
    items[left].classList.add("left");
    items[right].classList.add("right");

    background.src = items[active].querySelector('img').src;
}

showSlider();

next.onclick = function() {
    active = (active + 1) % items.length;
    showSlider();
}

prev.onclick = function() {
    active = (active - 1 + items.length) % items.length;
    showSlider();
}

let cards = document.querySelectorAll('.agent-box .card');

function rotateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('rotate-1', 'rotate-2', 'rotate-3');
        card.classList.add(`rotate-${index + 1}`);
    });
}

function resetCards() {
    cards.forEach(card => {
        card.classList.remove('rotate-1', 'rotate-2', 'rotate-3');
    });
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            rotateCards();
        } else {
            resetCards();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.left-agent-box'));
