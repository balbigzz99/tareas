// Cadenas 3
// Paso 1: Declarar la cita rota
let brokenQuote = "yO No mE GuStaN lOs hUeVoS vErDeS cOn jAmÓn";

// Paso 2: Arreglar la capitalización y reemplazar la comida no deseada
let fixedQuote = brokenQuote.charAt(0).toUpperCase() + brokenQuote.slice(1).toLowerCase();
fixedQuote = fixedQuote.replace("huevos verdes con jamón", "brócoli");

// Paso 3: Agregar un punto al final de la cita
let finalQuote = fixedQuote + ".";

// Paso 4: Imprimir la cita corregida
console.log(finalQuote);