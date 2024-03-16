// Matemáticas 3
// Variables 3
// Grupos de afirmaciones y variables proporcionadas
var statement1 = "El peso de Juan es mayor que el peso de María.";
var weightJuan = 70;
var weightMaria = 60;

var statement2 = "La altura de Pedro es menor que la altura de Ana.";
var heightPedro = 160;
var heightAna = 170;

var statement3 = "La contraseña proporcionada coincide con la contraseña almacenada.";
var passwordProvided = "abc123";
var storedPassword = "abc123";

// Pruebas para cada afirmación
var weightComparison = weightJuan > weightMaria;
var heightComparison = heightPedro < heightAna;
var pwdMatch = passwordProvided === storedPassword;

console.log(statement1, weightComparison);
console.log(statement2, heightComparison);
console.log(statement3, pwdMatch);
