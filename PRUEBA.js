const PAIS = function (nombre, iva) 
{
    this.nombre = nombre;
    this.iva = iva;
}

let pais1 = new PAIS("argentina", 0.21);
let pais2 = new PAIS("españa", 0.25);
let pais3 = new PAIS("estados unidos", 0.08);
let pais4 = new PAIS("brasil", 0.18);
let pais5 = new PAIS("mexico", 0.16);

let paises = [pais1,pais2,pais3,pais4,pais5]; // ARRAY DE PAISES 


function filtrar (nombre)    
{
    let paisbuscado = nombre;
    let resultado = paises.filter((PAIS) => PAIS.nombre.includes(paisbuscado)); // GUARDA UN ARRAY DE LO QUE "ENCUENTRA"

    if (resultado.length > 0) {
       
        return resultado[0].iva;
    } else {   
        return null;
    }
}

let opcion = prompt("Selecciona un pais");

while (opcion != "argentina" && opcion != "mexico" && opcion != "españa" && opcion != "estados unidos" && opcion != "brasil") 
{
    alert ("INCORRECTO");
    opcion = prompt("Selecciona una opción: Argentina, Mexico , Brasil, españa o estados unidos");
    opcion = opcion.toLowerCase();
}

alert("Has seleccionado el pais: " + opcion);

alert("El iva es: " + filtrar(opcion));
console.log ("El iva es" + filtrar(opcion));


precio = parseFloat(prompt("Ingrese el precio:"));

console.log ("IVA: " + precio * filtrar(opcion));

console.log ("El precio final es:" + (precio + (precio * filtrar(opcion))));






/*
let opcion = prompt("Selecciona una opción: Argentina, Mexico o Brasil").toLocaleLowerCase();


while (opcion != "argentina" && opcion != "mexico" && opcion != "brasil") 
{
    alert ("INCORRECTO");
    opcion = prompt("Selecciona una opción: Argentina, Mexico o Brasil");
    opcion = opcion.toLowerCase();
}

if (opcion == "argentina")
{
    opcion = 1;
}
else if (opcion == "mexico")
{
    opcion = 2;
}
else 
{
    opcion = 3;
}

let Num1;
let Num2 = 100;
let Num3;
let Precio;

switch (opcion) {
  case 1:
  console.log("Has seleccionado la opción Argentina");
   Precio = parseInt (prompt("Ingresar precio"));
   Num1= 21;
   Num3= Precio * Num1 / Num2;
   PrecioFinal= Precio+Num3;
  console.log("El precio final mas iva es" +" "+ PrecioFinal)
  console.log("El IVA es"+" "+Num3 )
    break;
  case 2:
    // Comando para la opción 2
    console.log("Has seleccionado la opción Mexico");
     Precio = parseInt (prompt("Ingresar precio"));
     Num1= 16;
     Num3= Precio * Num1 / Num2;
     PrecioFinal= Precio+Num3;
  console.log("El precio final mas iva es" +" "+ PrecioFinal);
  console.log("El IVA es"+" "+Num3 );
    break;
  case 3:
    // Comando para la opción 3
    console.log("Has seleccionado la opción Brasil");
    Precio = parseInt (prompt("Ingresar precio"));
     Num1= 18;
     Num3= Precio * Num1 / Num2;
     PrecioFinal= Precio+Num3;
    console.log("El precio final mas iva es" +" "+ PrecioFinal);
    console.log("El IVA es"+" "+Num3 );
    break;
}




*/