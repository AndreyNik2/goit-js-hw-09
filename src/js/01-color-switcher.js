const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector("button[data-start]");
const btnStoptEl = document.querySelector("button[data-stop]");
let setBackgrounColorInterval = null;

btnStartEl.addEventListener('click', onSetColor);
btnStoptEl.addEventListener('click', stopSetColor)


function onSetColor() {
    setBackgrounColorInterval = setInterval(setNewColorBody, 1000);
    btnStartEl.disabled = true;
}

function setNewColorBody(event) {
    bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopSetColor () {
    btnStartEl.disabled = false;
    clearInterval(setBackgrounColorInterval)
}


