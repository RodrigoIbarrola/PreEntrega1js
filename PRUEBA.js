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
    opcion = prompt("Selecciona una opción: Argentina, Mexico , Brasil, españa o estados unidos").toLowerCase();
}

alert("Has seleccionado el pais: " + opcion);

alert("El iva es: " + filtrar(opcion));
console.log ("El iva es: " + filtrar(opcion));


let precio = parseFloat(prompt("Ingrese el precio:")); // Guardo el precio 

let  iva = precio * filtrar(opcion);

console.log ("IVA: " + iva);

console.log ("El precio final es:" + (precio + iva));