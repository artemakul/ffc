const swiper = new Swiper('.hero-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // autoplay
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.hero-swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});














const swiper2 = new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 186,
    },
  },
  
  
  
  // direction: 'horizontal',
  // loop: true,
  
  // // autoplay
  // // autoplay: {
  // //   delay: 3500,
  // //   disableOnInteraction: false,
  // // },

  // // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});







const swiper3 = new Swiper(".swiper-teams", {
  slidesPerView: 1,
  spaceBetween: 10,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 186,
    },
  },
});



const swiper4 = new Swiper(".swiper-football", {
  slidesPerView: 1,
  spaceBetween: 10,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 186,
    },
  },
});





const swiper5 = new Swiper('.modal-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.modal-swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.modal-swiper-button-next',
    prevEl: '.modal-swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.modal-swiper-scrollbar',
  },
});



var timeline = new Swiper(".swiper-timeline", {
  pagination: {
    el: ".swiper-timeline-pagination",
    dynamicBullets: true,
  },
  slidesPerView: 3,
  // spaceBetween: 30,
  freeMode: true,
});



let currentSlider = document.querySelectorAll('.sport-fscreen__bg')
let modal = document.querySelector('#modal')
let closeBtn = document.querySelector('.close')

for(let i = 0; i < currentSlider.length; i++){
  currentSlider[i].onclick = function(){
    modal.classList.add('show');
  }
}
closeBtn.onclick = function(){
  modal.classList.remove('show');
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove('show');
  }
}




