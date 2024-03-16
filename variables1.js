// Variables 1
// Crea cuatro variables que contengan números
var num1 = 8;
var num2 = 6;
var num3 = 10;
var num4 = 4;

// Agrega las dos primeras variables y guarda el resultado en otra variable
var sum = num1 + num2;

// Resta la cuarta variable de la tercera y almacena el resultado en otra variable
var difference = num3 - num4;

// Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada finalResult
var finalResult = sum * difference;

// Comprueba si finalResult es un número par
var evenOddResult = finalResult % 2 === 0;

console.log("El resultado final es:", finalResult);
console.log("¿Es el resultado final un número par?", evenOddResult);