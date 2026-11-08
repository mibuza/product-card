export class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);

    const cancelButton = this.modal.querySelector(".modal__button-cancel");
    
    cancelButton.addEventListener("click", () => {
      this.close();
    });
  }

  open() {
    console.log('открытие модального окна');
    this.modal.classList.add('modal-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
  }

  isModalOpen() {
    return this.modal.classList.contains('modal-showed'); 
}}; 
