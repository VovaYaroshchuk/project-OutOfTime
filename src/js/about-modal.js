//  data-modal-open
//  data-modal-close
//  data-modal
// код можно скопировать и вставить в новую папку, изменив название трех выше классов в коде, на более подходящее для вас.
// 
(() => {
  const refs = {
    openModalBtn: document.querySelector('[aboutdata-modal-open]'),
    closeModalBtn: document.querySelector('[about-data-modal-close]'),
    modal: document.querySelector('[about-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
