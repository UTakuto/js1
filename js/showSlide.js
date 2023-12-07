function showSlide() {
  slider[currentIndex].style.display = "block";
  for (let i = 0; i < sliderLength; i++) {
    if (i !== currentIndex) {
      slider[i].style.display = "none";
    }
  }
}
