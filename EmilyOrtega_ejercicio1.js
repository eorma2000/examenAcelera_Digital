/*CONDICIONES*/


//el pago ordinario es de 265
phorabase= 265; //pago por hora base
horast= 53; //horas totales de trabajo

thpn=40*phorabase; //thpn= total de horas pagadas normales
console.log("El total de pagar por horas laborales normal (40hrs) es de: "+ thpn);

if (horast>=41){
    tp=(horast-40)*350;

    console.log("El total de pagar por horas extra "+ (horast-40) + " hrs es de: "+ tp);
}
