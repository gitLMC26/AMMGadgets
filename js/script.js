import {displayProd, dispAddToCart} from '../js/storeProd.js';

import {clickCart, clickClose, storeProdCart, displayCartProd} from '../js/cart.js';

// // Access cart
let cartModal = document.querySelector(".cartModal");
let cartModalCenter = document.querySelector(".cartModalCenter");
let cartClickIcon = document.querySelector("#cartIcon");
let cartCounter = document.getElementById("counter");
let close = document.querySelector(".close");
let addBtnClickClass = document.getElementsByClassName("addToCartBtn");
let prodQuantity = document.getElementsByClassName("prodQuantity");

// Open and Close Cart
clickCart(cartClickIcon, cartModal);
clickClose(close, cartModal);

storeProdCart(addBtnClickClass, cartCounter);
displayCartProd(cartModalCenter, prodQuantity, cartCounter);

// // Store selected product to local storages/ for display product
var clickProdClass = document.getElementsByClassName("prodView");
console.log(clickProdClass);

let sliderHide = document.querySelector("#pSlider");
let productShow = document.querySelector(".box_container");
let prodImg = document.querySelector("#prodImg");
let productName = document.querySelector(".title");
let priceProd = document.querySelector(".price");
let dispAddToCartBtn = document.querySelector("#dispAddToCartBtn");
let dispQuantity = document.querySelector("#dispQuantity").value;

displayProd(clickProdClass, sliderHide, productShow, prodImg, productName, priceProd);
dispAddToCart(dispAddToCartBtn, dispQuantity);
// JS

let searchForm = document.querySelector('.searchForm');

document.querySelector('#searchBtn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.loginForm');

document.querySelector('#loginBtn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#closeBtn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .nav2').classList.add('active');
  }else{
    document.querySelector('.header .nav2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .nav2').classList.add('active');
  }else{
    document.querySelector('.header .nav2').classList.remove('active');
  }

  // fadeOut();
}

var swiper = new Swiper(".partner-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".reviewsSlider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// $(document).ready(function(){
//   $('.customer-logos').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1500,
//       arrows: false,
//       dots: false,
//       pauseOnHover:false,
//       responsive: [{
//           breakpoint: 768,
//           setting: {
//               slidesToShow:4
//           }
//       }, {
//           breakpoint: 520,
//           setting: {
//               slidesToShow: 3
//           }
//       }]
//   });
// });

// let countDate = new Date('dec 12, 2022 00:00:00').getTime();

// function countDown(){

//     let now = new Date().getTime();
// 	  gap = countDate - now;

//     let seconds = 1000;
//     let minutes = seconds * 60;
//     let hours = minutes * 60;
//     let days = hours * 24;

//   let d = Math.floor(gap / (days));
// 	let h = Math.floor((gap % (days)) / (hours));
// 	let m = Math.floor((gap % (hours)) / (minutes));
// 	let s = Math.floor((gap % (minutes)) / (seconds));

//     document.getElementById('#days').innerText = d;
//     document.getElementById('#hours').innerText = h;
//     document.getElementById('#minutes').innerText = m;
//     document.getElementById('#seconds').innerText = s;

// }

// $(document).ready(function(){

//   $('.category .btn').click(function(){

//       let filter = $(this).attr('data-filter');
//       if(filter == 'all'){
//           $('.category .boX').show(400);
//       }else{
//           $('.category .boX').not('.'+filter).hide(200);
//           $('.category .boX').filter('.'+filter).show(400);
//       }

//       $(this).addClass('button-active').siblings().removeClass('button-active');

//   });

// });
