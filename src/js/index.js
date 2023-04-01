const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    const idSelected = character.attributes.id.value;
    if (idSelected === 'buu') return;

    const characterSelected = document.querySelector(".selected");
    characterSelected.classList.remove("selected");
    character.classList.add("selected");

    const imagePlayer1 = document.getElementById('player-character-1');
    imagePlayer1.src = `./src/imagens/${idSelected}.png`;

    const playerName1 = document.getElementById('player-name-1');
    const nameSelected = character.getAttribute('data-name');
    playerName1.innerHTML = nameSelected;
  });
});
