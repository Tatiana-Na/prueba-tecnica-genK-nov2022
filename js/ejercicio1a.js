'use strict';

/// Escribe el código javascript necesario para pintar un botón en el body y que el botón tenga el texto "1 botón"


const btn = document.createElement('input');
btn.type = 'button';
btn.id = 'btn1';
btn.value = '1 botón';


document.body.appendChild(btn);
