/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function crearCarta() {
    const numb = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const palos = ["♠️", "♣️", "♥️", "♦️"];

    const numbAleatorio = numb[Math.floor(Math.random() * numb.length)];
    const palosAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const cartaNueva = `${numbAleatorio} ${palosAleatorio}`;

    document.querySelector(`.top-card`).innerHTML = palosAleatorio;
    document.querySelector(`.footer-card`).innerHTML = palosAleatorio;
    document.querySelector(`.number`).innerHTML = numbAleatorio;
    // document.getElementById(`boton`).innerHTML = "New Card";
  }
  crearCarta();
  document.querySelector("#miboton").addEventListener("click", () => {
    crearCarta();
  });
};
