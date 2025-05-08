let items = document.querySelectorAll('.slider .item');
let dots = document.querySelectorAll('.slider .dots li');
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

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === active);
    });
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


dots.forEach(( li, key) => {
    li.addEventListener('click', function(){
        active = key;
        showSlider();
    })
})