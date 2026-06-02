import { buttons } from "./buttons.js";

const grid = document.getElementById("grid");
const mathInput = document.getElementById("mathInput");

for (const item of buttons) {
  const button = document.createElement("button");

  button.textContent = item.text;

  button.addEventListener("click", () => {
    mathInput.value += item.value;
    mathInput.focus();
  });

  grid.appendChild(button);
}
