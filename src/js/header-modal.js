(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hmodal-open]'),
    closeModalBtn: document.querySelector('[data-hmodal-close]'),
    modal: document.querySelector('[data-hmodal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();



(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hmodal-open2]'),
    closeModalBtn: document.querySelector('[data-hmodal-close2]'),
    modal: document.querySelector('[data-hmodal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
