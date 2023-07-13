let opcion = prompt("Selecciona una opción: Argentina, Mexico o Brasil");

opcion = opcion.toLowerCase();

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
