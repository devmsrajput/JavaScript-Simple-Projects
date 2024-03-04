const main = document.querySelector(".typer");
const textArray = ["Developer", "Designer", "Engineer"];
const delay = 5;
const writeSpeed = 100;
const beepSpeed = 200;

// Write and Remove:
let index = 0;
let arrIndex = 0;
let term = "write";

setInterval(() => {
  if (arrIndex < textArray.length) {
    if (term === "write") {
      if (index < textArray[arrIndex].length + delay) {
        const newElm = document.createElement("span");
        newElm.appendChild(
          document.createTextNode(
            textArray[arrIndex][index] ? textArray[arrIndex][index] : ""
          )
        );
        main.appendChild(newElm);
        index++;
      } else {
        term = "remove";
      }
    } else {
      main.lastChild.remove();
      index--;
      if (index === 0) {
        term = "write";
        arrIndex++;
      }
    }
  } else {
    arrIndex = 0;
  }
}, writeSpeed);

// Vertical blinking line:
let cursor = "visible";
setInterval(() => {
  if (cursor === "hidden") {
    main.style.setProperty("--typerAfterVisibility", "visible");
    cursor = "visible";
  } else {
    main.style.setProperty("--typerAfterVisibility", "hidden");
    cursor = "hidden";
  }
}, beepSpeed);
