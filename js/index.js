const slides = document.querySelectorAll(".slide");
let index = 0;

// aktifkan slide pertama
slides[0].classList.add("active");

function nextSlide(){
    const current = slides[index];
    const next = slides[(index+1)%slides.length];

    current.classList.remove("active");
    current.classList.add("prev");

    next.classList.add("active");

    index = (index+1)%slides.length;
}

setInterval(nextSlide,3000);