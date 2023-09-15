document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slider img");
    const slideCount = slides.length;
    const intervalTime = 3000; // Time in milliseconds for each slide

    // Function to change the slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    // Function to update the slider
    function updateSlider() {
        const translateX = -currentIndex * 100;
        slider.style.transform = `translateX(${translateX}%)`;
    }

    // Automatically change the slide at a set interval
    setInterval(nextSlide, intervalTime);
});
