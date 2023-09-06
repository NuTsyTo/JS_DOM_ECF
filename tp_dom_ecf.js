
const toggleButton = document.getElementById("toggle-number");
const inputs = document.querySelectorAll(".input");
let inputsVisible = false;

toggleButton.addEventListener("click", () => {
    inputsVisible = !inputsVisible;

    inputs.forEach((input) => {
        if (inputsVisible) {
            input.style.display = "block";
        } else {
            input.style.display = "none";
        }
    });
});

const input = document.querySelectorAll(".input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            if (input.value >=1 && input.value <= 5 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
    });

const toggleColor = document.getElementById("toggle-color");
const inputColor = document.querySelectorAll(".input");
let inputColorVisible = false;

toggleColor.addEventListener("click", () => {
    inputColorVisible = !inputColorVisible;

    inputColor.forEach((input) => {
        if(inputColorVisible){
            input.style.display = "block";
        } else {
            input.style.display = "none";
        }
    });
});
    



