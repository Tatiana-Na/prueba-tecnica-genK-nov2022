'use strict';

///Una vez tienes pintados 1000 botones añade mediante javascript el código necesario para que al pasar el ratón por encima de cada botón se cambie la letra n de botón por N mayúscula y al quitar el ratón de encima que vuelva a poner la letra n en minúscula.

const body = document.querySelector('body');
const containerButtons = document.createElement('div');
body.append(containerButtons);

for (let i = 1; i<=1000; i++) {
  const btn = document.createElement('button');
  btn.addEventListener("mouseover", () => {
    btn.innerText =`${i} botóN`
  });
  btn.addEventListener("mouseout", () => {
    btn.innerText = `${i} botón`;
  });
  containerButtons.append(btn); 
  btn.innerText =`${i} botón`;
}
