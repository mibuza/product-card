import { Modal } from "./modal.js";
import { Form } from "./form.js";

const registerForm = new Form("registration-form"); 
const registerModal = new Modal("registration-modal");

const registerButton = document.getElementById("button-registration");
const cancelButton = document.getElementById("button-cancel");

console.log(registerButton);

registerButton.addEventListener("click", () => {
  registerModal.open();
});

registerForm.form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (!registerForm.isFormValid()) {
    alert("Пожалуйста, заполните все обязательные поля.");
    return;
  }

  const values = registerForm.getFormValues();

  if (values.password !== values.repeatPassword) {
    alert("Пароли не совпадают. Пожалуйста, повторите ввод.");
    return;
  }
  delete values.password;
  delete values.repeatPassword;

  console.log("password")
  
});

// cancelButton.addEventListener("click", () => {
//   registerModal.close();
// });


// registerModal.open();
// registerModal.close();
 