'use strict';

const body = document.querySelector('body');
const containerButtons = document.createElement('div');
body.append(containerButtons);

for (let i = 1; i<=1000; i++) {
  const btn = document.createElement('button');
  containerButtons.append(btn); 
  btn.innerText =`${i} botón`
}
