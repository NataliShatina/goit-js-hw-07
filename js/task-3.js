const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  // Очищаємо пробіли по краях
  const name = input.value.trim();

  // Якщо порожньо або лише пробіли — "Anonymous"
  output.textContent = name === "" ? "Anonymous" : name;
});
