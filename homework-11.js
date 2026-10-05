const modal = document.querySelector(".modal")
const buttonCancel = document.querySelector(".modal__button-cancel")
const buttonRegistration = document.querySelector(".button-registration")
const overlay = document.querySelector(".overlay")


modal.addEventListener("submit", (event) => {
  event.preventDefault()
  const form = event.target;
  const formData = new FormData(modal__container)
  const formValues = Object.fromEntries(formData.entries())
  console.log(formValues)
  if(!modal.checkValidity()) {
    modal.reportValidity();
    
  }
});

buttonRegistration.addEventListener('click', (event) => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed")
  console.log(buttonRegistration)

});


buttonCancel.addEventListener('click', (event) => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed")
});