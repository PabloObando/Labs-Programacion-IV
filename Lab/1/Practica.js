// ¿Qué se imprimirá en la consola//
let x = 5;
let y = x++;
console.log(y);
//Respuesta: 5 porque la "x++" hace referencia a incrementar un numero mas o letra pero no hace la funcion porque la variable "x++" tiene que estar primero que las demas para hacer el incremento//

//¿Cuál es la salida del siguiente código?//
let x = 10;
(function() {
  console.log(x);
  let x = 20;
})();
//Respuesta: ReferenceError //

//¿Qué devuelve este código?//
console.log(typeof NaN);
//Respuesta: number//

//¿Cuál es la salida de este código?//
let a = {};
let b = a;
console.log(a === b);
//Respuesta: true//

//¿Cuál es la salida de este código?//
const arr = [1, 2, 3];
const [x, y] = arr;
console.log(y);
//Respuesta: seria 2, ya que si lo comprobamos agregando una 'z' e imprimimos la 'z' el resultado es 3 //

//¿Qué imprime este código en la consola?//
console.log(typeof null);
//Respuesta: object//
 

//¿Cuál es el resultado de esta expresión?//
console.log(0 == '0');
//Respuesta: true//

//¿Qué retorna este código?//
console.log([] == false);
 //Respuesta: true//

 //¿Cuál es el resultado de la siguiente operación?
console.log(1 + '1' - 1);
// Respuesta: 10//

//¿Cuál es la salida del siguiente código?//
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
//Respuesta: [1,2,3,4] porque el "push" agrega un numero mas que seria el 4.
