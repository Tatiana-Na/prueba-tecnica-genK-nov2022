'use strict';

/// Mediante javascript haz que al pasar el ratón por encima del botón cambie el texto "1 botón" por "1 botóN" y al quitar el ratón de encima que vuelva a poner "1 botón"

btn.addEventListener("mouseover", function() {
    this.value = "1 botóN";
  });
  
  btn.addEventListener("mouseout", function() {
    this.value = "1 botón";
  });