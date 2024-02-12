let countDownDate = new Date("Jan 27, 2024 21:30:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("counter_id").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter_id").innerHTML = "EXPIRED";
  }
}, 1000);

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

/* Animation */
ScrollReveal().reveal(".top_nav", {
  orgin: "bottom",
  distance: "20px",
  opacity: 0,
});

ScrollReveal().reveal(".nav", {
  orgin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  orgin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});

ScrollReveal().reveal(".section", {
  orgin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".footer", {
  orgin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 300,
});

// Hmaburger

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("mobile_nav_hide");
});

// Swiper

// cart

const addToCart = document.querySelectorAll(".add_to_cart");

addToCart.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const title = button.getAttribute("data-title");
    const image = button.getAttribute("data-image");
    const price = button.getAttribute("data-price");

    const cartItem = { id, title, image, price };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});
