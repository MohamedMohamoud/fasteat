let navber = document.querySelector('.header .navber');
document.querySelector('#menu-btn').onclick =() =>{
    navber.classList.toggle('active');
}
window.onscroll = () =>{
    navber.classList.remove('active');
}
document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox =>{
    faqBox.onclick =() =>{
        faqBox.parentElement.classList.toggle('active')
    }

});

var swiper = new Swiper(".home-slider", {
    loop:true,
    effect: "coverflow",
    spaceBetween:30,
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})
  var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
    slidesperView:"auto",
    centeredSlides:true,
    grabCursor: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    pagination: {
        el:".swiper-pagination"
    },
   
});
var swiper = new Swiper(".reviews-slider", {
    loop:true,
    slidesperView:"auto",
    grabCursor: true,
    spaceBetween:30,
    coverflowEffect: {
    },
    pagination: {
        el:".swiper-pagination"
    },
    breakpoints: {
        768:{
            slidesperView:1,
        },
        991:{
            slidesperView:2,

        },
    },
   
});