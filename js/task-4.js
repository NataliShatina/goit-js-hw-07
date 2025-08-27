const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // сторінка не перезавантажується

  const { email, password } = form.elements;

  // Очищаємо пробіли по краях
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевірка на порожні поля
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData); // вивід в консоль

  form.reset(); // очищаємо форму
});
