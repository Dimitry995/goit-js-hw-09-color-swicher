let bodyEl = document.querySelector('body');
const buttonStart = document.querySelector('.data-start');
const buttonStop = document.querySelector('.data-stop');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;

buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    const randomBackgroundColor = getRandomHexColor();
    bodyEl.style.backgroundColor = randomBackgroundColor;
    document.querySelector('.data-start').disabled = true;
  }, 1000);
});
buttonStop.addEventListener('click', offClickButton);
function offClickButton(e) {
  clearTimeout(timerId);
  //bodyEl.style.backgroundColor = randomBackgroundColor;
  document.querySelector('.data-start').disabled = false;
}
