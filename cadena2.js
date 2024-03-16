// Cadenas 2
// Paso 1: Declarar las variables
let quote = "No me gustan los huevos verdes con jamón";
let substring = "huevos verdes con jamón";
let quoteLength, index, revisedQuote;

// Paso 2: Calcular la longitud de la cita
quoteLength = quote.length;

// Paso 3: Buscar la posición del substring en la cita
index = quote.indexOf(substring);

// Paso 4: Recortar la cita original
revisedQuote = quote.slice(0, index) + "y el jamón";

// Paso 5: Imprimir la cita modificada
console.log(revisedQuote);