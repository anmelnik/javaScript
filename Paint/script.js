let can = document.querySelector("#canvas"),
  ctx = can.getContext("2d"),
  isMousDown = false,
  coords = [];

can.width = window.innerWidth;
can.height = window.innerHeight;

can.addEventListener("mousedown", () => {
  isMousDown = true;
});

can.addEventListener("mouseup", () => {
  isMousDown = false;
  ctx.beginPath();
  coords.push('mouseup')
});

ctx.lineWidth = 20;

can.addEventListener("mousemove", (e) => {
  if (isMousDown) {
    coords.push([e.clientX, e.clientY]);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
});

function save() {
  localStorage.setItem("coords", JSON.stringify(coords));
}

function replay() {
  let timer = setInterval(() => {
    if (!coords.length) {
      clearInterval(timer);
      ctx.beginPath();
      return;
    }

    let crd = coords.shift(),
      e = {
        clientX: crd["0"],
        clientY: crd["1"],
      };

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }, 30);
}

function clear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, can.width, can.height);
  ctx.beginPath();
  ctx.fillStyle = "black";
}

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 83) {
    save();
  }
  if (e.keyCode == 82) {
    coords = JSON.parse(localStorage.getItem("coords"));
    clear();
    replay();
  }
  if (e.keyCode == 67) {
    clear();
  }
});

 alert(`Привет, нарисуйте что нибудь, нажмите 'S', а затем 'C' и 'R'. \n\nHi, draw something, press 'S' followed by 'C' and 'R'.`); 
