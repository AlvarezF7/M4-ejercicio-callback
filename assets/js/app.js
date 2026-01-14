// Funcion 1  validar , muestra un prompt que solicite al usuario ingresar un numeo
let dato = prompt("Ingrese un Número:");


function validar_numero(callback) {
   let resultado;
   if( /^\d+$/.test(dato) ){

       resultado = `${dato} valor ingresado exitosamente`;
   }
    else{
        { /^[a-zA-Z]+$/.test(dato)}
        resultado = `Error el valor ${dato}  no es un número`
    }

    setTimeout(() => {
     callback(resultado);
  }, 3000);
}
 validar_numero((mensaje) => {
    console.log(mensaje);

 })


// FUNCION 2  sumatoria

function calcular_avisar(numero, callback) {
    // Validar que sea un número positivo
    if (!/^\d+$/.test(numero)) {
        callback("Error: debes ingresar un número válido");
        return;
    }

    numero = Number(numero);
    let suma = 0;

  
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) { // impar
            suma += i;
        }
    }

    setTimeout(() => {
        callback(`El valor de la sumatoria es ${suma}. Este resultado se obtuvo hace 5 segundos`);
    }, 5000);
}

//mostrar
calcular_avisar(dato, (mensaje) => {
    console.log(mensaje);
    // También podrías usar alert(mensaje);
});

//FUNCION 3  

calculer_dependiendo(numero,callback, callbackError)