
let color = document.querySelector(".color");
let btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
    event.preventDefault();
  let randomNumber = Math.floor(Math.random() * 15777);
  let randomCode = "#" + randomNumber.toString(15);
  document.body.style.backgroundColor = randomCode;
  color.value = `${"Background Color :"} ${randomCode}`;
});