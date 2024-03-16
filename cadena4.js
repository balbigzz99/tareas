// Cadenas 4
// Paso 1: Declarar las variables
let theorem = "Teorema de Pitágoras";
let side1 = 3;
let side2 = 4;
let hypotenuse;

// Paso 2: Calcular la longitud de la hipotenusa
hypotenuse = Math.sqrt(side1 ** 2 + side2 ** 2);

// Paso 3: Crear la plantilla literal
let mathQuote = `${theorem}: Con los lados ${side1} y ${side2}, la longitud de la hipotenusa es ${hypotenuse}`;

// Paso 4: Imprimir la cita matemática
console.log(mathQuote);