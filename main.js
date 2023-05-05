//  la idea es que el usuario elija una figura geometrica en 2 dimensiones y el programa calcule el area de dicha figura, circulo y rectangulo.


const areaC = (x) => Math.PI * Math.pow(x, 2);//funcion que calcula el area de un circulo de radio x.
const areaR = (x, y) => x * y;//funcion que calcula el area de un rectangulo de lados "x" e "y".

alert("este programa calcula el area de una figura geometrica, oprima enter para continuar");

let figura = prompt("que figura desea calcular su area, C o R"); //ingreso del dato de la forma geometrica
let resultado; //declaracion de la variable resultado

while (figura === "c" || figura === "r") {
    if (figura === "c") { //figura circulo
        let radio = parseInt(prompt("ingrese el radio del circulo")); //ingreso del dato de radio
        resultado = areaC(radio); //llamado de funcion y variable resultado modificada
    } else if (figura === "r") { //figura rectangulo
        let lado1 = parseInt(prompt("ingrese la longitud del lado 1")); //ingreso de dato de lado
        let lado2 = parseInt(prompt("ingrese la longitud del lado 2")); //ingreso de dato de lado
        resultado = areaR(lado1, lado2); //llamado de funcion y variable resultado modificada
    }
    alert(`el area es ${resultado}`); //mensaje en pantalla donde se muestra el resultado 
    figura = prompt("si quiere seguir con la operacion, indique devuelta la forma geometrica, caso contrario oprima ESC"); //solicitud del usuario si desea seguir con la operacion
}

alert("gracias por usar el programa");