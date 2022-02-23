//  data-modal-open
//  data-modal-close
//  data-modal
// код можно скопировать и вставить в новую папку, изменив название трех выше классов в коде, на более подходящее для вас.
// 
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-modal-open]'),
    closeModalBtn: document.querySelector('[data-about-modal-close]'),
    modal: document.querySelector('[data-about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();