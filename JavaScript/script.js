function actividad1() {
  let nombre = prompt("¿Cómo te llamas?");
  alert("Hola, " + nombre + ". Bienvenido a JavaScript.");
  console.log(`Usuario: ${nombre}`);
}

function actividad2() {
  function sumar(a, b) {
    return a + b;
  }
  let num1 = parseFloat(prompt("Ingresa el primer número"));
  let num2 = parseFloat(prompt("Ingresa el segundo número"));
  let resultado = sumar(num1, num2);
  alert(`La suma es: ${resultado}`);
}

function actividad3() {
  let numero = parseInt(prompt("Ingresa un número"));
  if (numero % 2 === 0) {
    alert("Es un número par");
  } else {
    alert("Es un número impar");
  }
}

function actividad4() {
  let frutas = ["Manzana", "Banana", "Pera", "Uva"];
  frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`);
  });
}

function actividad5() {
  let nombre = prompt("Ingresa tu nombre completo");
  let profesion = prompt("¿Cuál es tu profesión?");
  let correo = prompt("Correo electrónico");
  let tarjeta = { nombre, profesion, correo };
  console.log(`------ Tarjeta de Presentación ------
Nombre: ${tarjeta.nombre}
Profesión: ${tarjeta.profesion}
Correo: ${tarjeta.correo}
-------------------------------------`);
}

function actividad6() {
  let secreto = Math.floor(Math.random() * 10) + 1;
  let intento, intentos = 0;
  while (intento !== secreto) {
    intento = parseInt(prompt("Adivina un número del 1 al 10"));
    intentos++;
    if (intento === secreto) {
      alert(`¡Correcto! El número era ${secreto}. Intentos: ${intentos}`);
      break;
    } else {
      alert("Incorrecto, intenta de nuevo.");
    }
  }
}

function actividad7() {
  let votos = { instagram: 0, tiktok: 0, youtube: 0 };
  let cantidad = 3;
  for (let i = 0; i < cantidad; i++) {
    let respuesta = prompt("¿Red favorita? 1=Instagram, 2=TikTok, 3=YouTube");
    if (respuesta === "1") votos.instagram++;
    else if (respuesta === "2") votos.tiktok++;
    else if (respuesta === "3") votos.youtube++;
  }
  let total = votos.instagram + votos.tiktok + votos.youtube;
  console.log(`Instagram: ${(votos.instagram / total * 100).toFixed(1)}%`);
  console.log(`TikTok: ${(votos.tiktok / total * 100).toFixed(1)}%`);
  console.log(`YouTube: ${(votos.youtube / total * 100).toFixed(1)}%`);
}

function actividad8() {
  function calcular(a, b, operacion) {
    if (operacion === "+") return a + b;
    else if (operacion === "-") return a - b;
    else if (operacion === "*") return a * b;
    else if (operacion === "/") return b !== 0 ? a / b : "No se puede dividir entre cero";
    else return "Operación no válida";
  }

  let num1 = parseFloat(prompt("Primer número:"));
  let num2 = parseFloat(prompt("Segundo número:"));
  let op = prompt("Operación (+, -, *, /):");

  alert(`Resultado: ${calcular(num1, num2, op)}`);
}

function actividad9() {
  function esMayorDeEdad(edad) {
    return edad >= 18;
  }

  let edad = parseInt(prompt("¿Cuál es tu edad?"));
  if (esMayorDeEdad(edad)) {
    alert("Puedes ingresar al sitio.");
  } else {
    alert("Debes ser mayor de edad para ingresar.");
  }
}

function actividad10() {
  function crearFicha(nombre, edad, ciudad) {
    return { nombre, edad, ciudad };
  }

  function mostrarFicha(ficha) {
    return `Nombre: ${ficha.nombre}\nEdad: ${ficha.edad}\nCiudad: ${ficha.ciudad}`;
  }

  let nombre = prompt("Nombre:");
  let edad = parseInt(prompt("Edad:"));
  let ciudad = prompt("Ciudad:");
  let fichaUsuario = crearFicha(nombre, edad, ciudad);
  alert(mostrarFicha(fichaUsuario));
}
