(() => {
  const refs = {
    openModalBtn: document.querySelector('[location-open]'),
    closeModalBtn: document.querySelector('[location-close]'),
    modal: document.querySelector('[location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[franchise-open]'),
    closeModalBtn: document.querySelector('[franchise-close]'),
    modal: document.querySelector('[franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();