const dino = document.querySelector("#dino");
const cactux = document.querySelector("#cactux");

document.addEventListener("keydown", () => jump());

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(() => {
    let dinTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactuxLeft = parseInt(window.getComputedStyle(cactux).getPropertyValue("left"))

    if(cactuxLeft <50 && cactuxLeft > 0 && dinTop <= 80) {
        alert("GameOver !")
    }
})