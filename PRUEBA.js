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


document.getElementById("CALCULAR").onclick = function(){

let PAIS = document.getElementById("PAIS").value;
let PRECIO = parseFloat(document.getElementById("PRECIO").value);


document.getElementById("ELECCIONPAIS").textContent = "País seleccionado: " + PAIS;

let IVA = filtrar(PAIS);

document.getElementById("IVA").textContent = "IVA: " + IVA;

let FINAL = PRECIO + (PRECIO * filtrar(PAIS));

document.getElementById("PRECIOFINAL").textContent = "Precio final: " + FINAL;

localStorage.setItem("PAIS", PAIS);
localStorage.setItem("IVA", IVA);
localStorage.setItem("PRECIO", PRECIO);
localStorage.setItem("FINAL", FINAL);


document.getElementById("MOSTRAR").textContent = "MOSTRAR";
document.getElementById("MOSTRAR").style.cssText = "width: 100px; height: 50px; margin: 2px; border: solid; padding: 0; text-align: center; line-height: 50px;";


};

document.getElementById("MOSTRAR").onclick = function() {
    let PAIS = localStorage.getItem("PAIS");
    let IVA = localStorage.getItem("IVA");
    let PRECIO = localStorage.getItem("PRECIO");
    let FINAL = localStorage.getItem("FINAL");

    if (document.getElementById("PRECIOFINAL").textContent != null) {
        alert("Pais elegido: " + PAIS + "\nIVA: " + IVA + "\nPRECIO: " + PRECIO + "\nFINAL: " + FINAL);
    } else {
        alert("Debe ingresar un precio!");
    }
};
















//let opcion = prompt("Selecciona un pais");
/*
while (opcion != "argentina" && opcion != "mexico" && opcion != "españa" && opcion != "estados unidos" && opcion != "brasil") 
{
    alert ("INCORRECTO");
    opcion = prompt("Selecciona una opción: Argentina, Mexico , Brasil, españa o estados unidos").toLowerCase();


alert("Has seleccionado el pais: " + opcion);

alert("El iva es: " + filtrar(opcion));
console.log ("El iva es: " + filtrar(opcion));


let precio = parseFloat(prompt("Ingrese el precio:")); // Guardo el precio 

let  iva = precio * filtrar(opcion);

console.log ("IVA: " + iva);

console.log ("El precio final es:" + (precio + iva));}*/