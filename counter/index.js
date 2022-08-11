//initial value
let i = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      i--;
    } else if(styles.contains("increase")) {
      i++;
    } else{
      i = 0;
    }

    if (i > 0) {
      value.style.color = "blue";
    }
    if (i < 0) {
      value.style.color = "red";
    }
    if (i === 0) {
      value.style.color = "#222";
    }
    value.textContent = i;
  });
});