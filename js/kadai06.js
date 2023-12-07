const item = document.querySelectorAll("img");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("mousemove", (event) => {
    item[i].classList.add("over");
  });
  item[i].addEventListener("mouseout", (event) => {
    item[i].classList.remove("over");
  });
}
// function(abv){} ---- (abv) => {}
