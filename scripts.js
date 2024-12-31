
document.querySelector('.toggle-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
window.addEventListener('scroll', function() {
    const menu = document.querySelector('.menu');
    if (window.scrollY > 50) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});
const menu = document.querySelector('.menu');
menu.addEventListener('mouseover', function() {
    if (menu.classList.contains('scrolled')) {
        menu.style.opacity = '1';
    }
});

menu.addEventListener('mouseout', function() {
    if (menu.classList.contains('scrolled')) {
        menu.style.opacity = '0.5';
    }
});
document.querySelectorAll('.menu ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        const parentLi = this.parentElement;
        if (parentLi.querySelector('.dropdown')) {
            event.preventDefault();
            parentLi.classList.toggle('active');
        }
    });
});

// Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

setInterval(nextItem, 3000); // Change item every 3 seconds

// Initial display
showItem(currentIndex);
