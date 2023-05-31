const openModal = document.querySelector('#abrir')
const fecharModal = document.querySelector('#fechar')
const modal = document.querySelector('#modal')

const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModal, fecharModal, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});