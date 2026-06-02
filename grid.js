const grid = document.getElementById("grid");
const mathInput = document.getElementById("mathInput");

for (const item of buttons) {
  const button = document.createElement("button");

  button.textContent = item.text;
  button.dataset.value = item.value;

  grid.appendChild(button);
}

grid.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  mathInput.value += button.dataset.value;
  mathInput.focus();
});
