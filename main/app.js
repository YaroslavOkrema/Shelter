/*NAV TOGGLE*/
const burger = document.getElementById("burger")
const menu = document.getElementById("menu")
burger.onclick = function(event){
    
    if(burger.classList.contains('active')){
        burger.classList.remove('active');
        menu.style.display = 'none';
    }
    else{
        burger.classList.add('active');
        menu.style.display = 'block';
    }
}

/*CAROUSEL*/

const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");
const carouselWrapper = document.querySelector('.slides');
const carouselItems = document.querySelectorAll('.ourFriends__item');
const screenWidth = window.innerWidth;

if (screenWidth >= 1280) {
    var itemsPerPage = 3.3;
} else if (screenWidth >= 768) {
    var itemsPerPage = 1.8;
} else {
    var itemsPerPage = 1;
}

let currentPage = 0;
let totalPages = Math.ceil(carouselItems.length / itemsPerPage);

prevButton.addEventListener("click", () => {
    if (currentPage === 0) {
        currentPage = totalPages - 1;
    } else {
        currentPage--;
    }
    carouselWrapper.style.transform = `translateX(-${currentPage * (270 * itemsPerPage + 100 * (itemsPerPage - 1))}px)`;
});

nextButton.addEventListener("click", () => {
    if (currentPage === totalPages - 1) {
        currentPage = 0;
    } else {
        currentPage++;
    }
    carouselWrapper.style.transform = `translateX(-${currentPage * (270 * itemsPerPage + 100 * (itemsPerPage - 1))}px)`;
});
                                