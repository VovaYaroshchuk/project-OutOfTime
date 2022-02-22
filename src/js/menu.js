(() => {
  const menuBtnRef = document.querySelector("[data-hmenu-button]");
   const menuBtnRef2 = document.querySelector("[data-hmodal-open2]");
  const mobileMenuRef = document.querySelector("[data-hmenu]");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef2.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();