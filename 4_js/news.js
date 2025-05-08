let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if( itemActive >= countItem){
        itemActive = 0;
    }

    showSlider();
}

prev.onclick = function(){
    itemActive = itemActive - 1;
    if( itemActive < 0){
        itemActive = countItem - 1;
    }

    showSlider();
}

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');

    dots[itemActive].classList.add('active');
}

dots.forEach(( li, key) => {
    li.addEventListener('click', function(){
        itemActive = key;
        showSlider();
    })
})