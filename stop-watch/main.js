let timer = document.querySelector(".timer");
let stop = document.querySelector(".stop");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");

let secTimer = 0;
let resume = false;

let handler;
function intervalRunner() {
  handler = setInterval(() => {
    if (!resume) {
      secTimer = Number(timer.innerHTML);
      secTimer++;
      updater();
    }
  }, 1000);
}

stop.addEventListener("click", () => {
  resume = true;
  clearInterval(handler);
});

start.addEventListener("click", () => {
  resume = false;
  clearInterval(handler);
  intervalRunner();
});

reset.addEventListener("click", () => {
  resume = true;
  clearInterval(handler);
  timer.innerHTML = 0;
});

function updater() {
  timer.innerHTML = secTimer;
}
