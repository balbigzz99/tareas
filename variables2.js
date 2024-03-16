// Matemáticas 2
// Variables 2
// Se proporcionan los resultados iniciales en result y result2
var result = 3 * 5; // Resultado original
var result2 = 8 / 2; // Resultado original

// Multiplica result y result2 y asigna el resultado nuevamente a result
result *= result2;

// Formatea el resultado con 2 decimales y almacena el resultado en una variable llamada finalResult
var finalResult = result.toFixed(2);

// Verifica el tipo de dato de finalResult y conviértelo a número
var finalNumber = parseFloat(finalResult);

console.log("El resultado final con 2 decimales es:", finalResult);
console.log("El tipo de dato de finalResult es:", typeof finalResult);
console.log("El valor de finalNumber es:", finalNumber);
