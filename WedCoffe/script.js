
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function autoSlide (){
  deletInterval= setInterval (timer, 7000);
  function timer (){
    plusSlide(1);
  }
}
autoSlide();

function teamSlide(n){
  showSlides((slideIndex += n));
}

const navbar = document.querySelector
('.menu');
// 
document.querySelector('hamburger-menu').
onclick = ( ) =>{
    navbar.classList.toggle('active');
};


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  });
});
