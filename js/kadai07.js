const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const slider = document.querySelectorAll("#slider li");

let selector = 0;

nextBtn.addEventListener("click", () => {
  selector++;
  if (selector >= slider.length) {
    selector = 0;
  }
  for (let i = 0; i < slider.length; i++) {
    if (i === selector) {
      slider[i].style.display = "block";
    } else if (i !== selector) {
      slider[i].style.display = "none";
    }
  }
});

prevBtn.addEventListener("click", () => {
  selector--;
  if (selector < 0) {
    selector = slider.length - 1;
  }
  for (let i = 0; i < slider.length; i++) {
    if (i === selector) {
      slider[i].style.display = "block";
    } else if (i !== selector) {
      slider[i].style.display = "none";
    }
  }
});

// let currentIndex = 0;

// nextBtn.addEventListener("click", () => {
//   currentIndex++;
//   if (currentIndex >= slider.length) {
//     currentIndex = 0;
//   }
//   for (let i = 0; i < slider.length; i++) {
//     if (i === currentIndex) {
//       slider[i].style.display = "block";
//     } else if (i !== currentIndex) {
//       slider[i].style.display = "none";
//     }
//   }
// });
// prevBtn.addEventListener("click", () => {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = slider.length - 1;
//   }
//   for (let i = 0; i < slider.length; i++) {
//     if (i === currentIndex) {
//       slider[i].style.display = "block";
//     } else if (i !== currentIndex) {
//       slider[i].style.display = "none";
//     }
//   }
// });
