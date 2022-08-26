

//ARREGLOS Y FUNCIONES

/*
Escribir un programa JavaScript orientado a objetos, llamado TuNombre_Examen3, que
realice las siguientes operaciones:
• Crear dos matrices de tamaño con los siguientes datos.
• Rellenar la primera con los datos: 3, 2, 1, 1, 2, 3, 2, 3, 1.
• Rellenar la segunda con los datos: 1, 1, 2, 2, 1, 1, 1, 2, 1.
• Mostrar el contenido de ambas matrices.
• Multiplicar la primera por la segunda y mostrar el resultado.
• Sumar la primera por la segunda y mostrar el resultado.
*/

const a=[3, 2, 1, 1, 2, 3, 2, 3, 1];
const b=[1, 1, 2, 2, 1, 1, 1, 2, 1];

console.log("Arreglo 1: ["+a+"]");
console.log("Arreglo 2: ["+b+"]");
console.log(a[0]+b[0]);

function operaciones(){
    for (let i=0; i<9; i++){
        suma=a[i]+b[i];
        console.log(a[i]+" + "+b[i]+" = "+suma);
        multiplicacion=a[i]*b[i];
        console.log(a[i]+" * "+b[i]+" = "+suma);
    }
}
console.log(operaciones())