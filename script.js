// For Slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        },
    },
  });


  
// For video

// Get the elements
const playButton = document.getElementById('playButton');
const popupBox = document.getElementById('popup-box');
const closeButton = document.querySelector('.close-button');

// Function to show the modal
playButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  popupBox.classList.add('show');
});

// Function to hide the modal
closeButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  popupBox.classList.remove('show');
});

// Function to hide the modal when clicking outside the content area
window.addEventListener('click', (event) => {
  if (event.target === popupBox) {
    popupBox.classList.remove('show');
  }
});
   