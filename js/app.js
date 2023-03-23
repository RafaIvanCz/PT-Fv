console.log("Prueba Técnica Finvoice")

const nombre = prompt("Ingrese su nombre, por favor")
document.getElementById("saludo").innerHTML = `Hola ${nombre}, soy la Prueba Técnica de Iván Cruz para Finvoice!`
document.getElementById("saludo").style.color = "#6a040f"
document.getElementById("saludo").style.fontWeight = "bold"

// EJERCICIOS SOLO PHP Y HTML.
// Ejercicio N°4
const respuestaEjercicio4Html = "* La persona de mayor edad encontrada en el ejercicio N° 4 de HTML es: "
console.log(respuestaEjercicio4Html)

const personas = [
  {
    nombre: "Juan",
    edad: 8
  },
  {
    nombre: "Pérez",
    edad: 15
  },
  {
    nombre: "Sebastian",
    edad: 5
  },
  {
    nombre: "Hans",
    edad: 9
  },
  {
    nombre: "Gabriel",
    edad: 7
  },
  {
    nombre: "Rocío",
    edad: 5
  },
]
const mayorEdad = personas.filter(persona => persona.edad >= 15)

const personaEncontrada = JSON.stringify(mayorEdad)

document.getElementById("mayor-edad").innerHTML = `${personaEncontrada}`

console.log(mayorEdad)


//Ejercicio N°5
const texto = document.getElementById("textoLorem").innerHTML

console.log("* La cantidad de caracteres encontrada en el texto del ejercicio N°5 de HTML es de: " + texto.length);


//EJERCICIOS SOLO JS Y HTML
//Ejercicio N°1
const respuesta = "* Esta es la cantidad de números impares encontrados entre 100 y 150 del ejercicio N°1 de JS:"
console.log(respuesta)

for (let impar = 101; impar < 150; impar+=2) {

  console.log(impar)
}

//Ejercicio N°2
function calcular() {
  const num1 = parseInt(document.getElementById('num1').value)
  const num2 = parseInt(document.getElementById('num2').value)

  const suma = num1 + num2
  const resta = num1 - num2
  const división = num1 / num2
  const multiplicación = num1 * num2

  const resultados = document.getElementById('resultado')
  resultados.innerHTML = `Suma ${suma} <br> Resta ${resta} <br> División ${división} <br> Multiplicación ${multiplicación}`
}

//Ejercicio N°4
const respuestaEjercicio4 = "* Estos son los vehículos filtrados del ejercicio N°4 de JS: "
console.log(respuestaEjercicio4)

let vehiculo = [
  {
    color: "rojo",
    marca: "bmw",
    capacidad: 11
  },
  {
    color: "azul",
    marca: "fiat",
    capacidad: 2
  },
  {
    color: "negro",
    marca: "hyundai",
    capacidad: 6
  },
  {
    color: "amarillo",
    marca: "jeep",
    capacidad: 15
  },
  {
    color: "azul",
    marca: "citroen",
    capacidad: 20
  },
  {
    color: "azul",
    marca: "renault",
    capacidad: 12
  },
  {
    color: "rojo",
    marca: "ford",
    capacidad: 4
  },
  {
    color: "gris",
    marca: "toyota",
    capacidad: 8
  },
]

function vehiculosFiltrados() {
  const resultado = vehiculo.filter(vehiculos => vehiculos.color === 'azul' && vehiculos.capacidad > 10)

  return resultado
}

console.log(vehiculosFiltrados())
