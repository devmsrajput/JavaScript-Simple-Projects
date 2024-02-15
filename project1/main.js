const body = document.querySelector("body");
const buttons = document.querySelectorAll(".box");

buttons.forEach((button) => {
    button.style.backgroundColor = `${button.id}`;

    button.addEventListener("click", (event) => {
        let idValue = event.target.id;
        switch (idValue) {
            case "white":
                body.style.backgroundColor = idValue;
                break;
            case "grey":
                body.style.backgroundColor = idValue;
                break;
            case "red":
                body.style.backgroundColor = idValue;
                break;
            case "blue":
                body.style.backgroundColor = idValue;
                break;
            case "purple":
                body.style.backgroundColor = idValue;
                break;
            default:
                console.log("Invalid color input.");
        }
    });
});
