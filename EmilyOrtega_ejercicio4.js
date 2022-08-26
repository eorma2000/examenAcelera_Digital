//Clases y herencia 

/*Una empresa requiere calcular el pago de salarios según el tipo de empleado. Existen empleados de confianza y empleados de sindicato, 
respectivamente ganan 500 y 250 USD diarios. La nómina se calcula por 15 días. 
Calcular el pago total que gana cada empleado, donde se le descuenta el 10% de impuestos si el empleado es de sindicato y 
13% si es empleado de confianza. 

    a. Defina las clases Persona, Empleado y Nómina- ok
    b. Clase Persona con propiedades, nombre, apellido y edad- ok
        i. el método getDetalles() el cual imprimirá en consola |los atributos de la persona. -ok
        ii. El constructor recibe y asigna nombre y apellido a los atributos internos. -ok

    c. Clase Empleado que hereda de Persona e incluye el atributo de Tipo (empleado de confianza(C) y de sindicato(S))
        i.Sobreescribir el método getDetalles() para que muestre en consola los detalles de Persona y los de Empleado.
        ii.El constructor recibe y asigna nombre, apellido y tipo a los atributos internos. -ok

    d. Clase Nomina tiene las propiedades de Empleados (arreglo)
        i.Crear el método para calcular el pago por los días laborados será un número aleatorio del 5 al 15, dependiendo del 
        tipo de empleado 
            y descontar los impuestos. 
            Si es empleado de sindicato el pago por día es 350.00 USD, con un descuento de 10% de impuestos;
            Si es empleado de confianza el pago por día es de 500.00 USD, con un descuento del 13% de impuestos.
        ii.El constructor recibe arreglo empleado (dos empleados de confianza y uno de sindicato)
        iii.Agregar método calcularNomina() que muestra a cada empleado, con el total a pagar por empleado.*/

class Person{

    nombre="";
    apellido="";
    edad="";

    constructor(nombre,apellido,edad){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad=edad;
    }
    get detalles(){
        return  this.nombre+ this.apellido + "de "+ this.edad;
    }


}

class Empleado extends Person{
    empleado=["-C","-S"];
    constructor(nombre,apellido,empleado){
        this.empleado=empleado;
    }  

    get detalles(){
        return  this.nombre+ this.apellido + "de "+ this.edad;
    }
    
}

class Nomina extends Empleado{
    calcularpago(){
        if (empleado==="-S"){
            pago=350.00 *0.10;
        }if(empleado==="-c"){
            pago=500.00 *0.13;
        }
        
    }

    calcularNomina(){

    }
    
}

let x= new Person("Emily", "Ortega",21);
console.log(x)
let y= new Person("Emily", "Ortega",21);
console.log(y)
let z= new Person("Emily", "Ortega",21);
console.log(z)