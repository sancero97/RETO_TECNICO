var pregunta;
var dinero=0;
var ronda_actual=0;
var posibles_respuestas;

window.onload = function() {
const categoria=preguntas.filter(pregunta => pregunta.categoria === rondas[ronda_actual])
pregunta=categoria[Math.floor(Math.random() * (5 - 0) + 0)]
posibles_respuestas = [
  pregunta.respuesta,
  pregunta.incorrecta1,
  pregunta.incorrecta2,
  pregunta.incorrecta3
]
posibles_respuestas.sort(() => Math.random() - 0.5)

var element = document.getElementById("pregunta");
element.innerHTML = pregunta.pregunta;

var elemento_puntaje = document.getElementById("puntaje");
elemento_puntaje.innerHTML = dinero;

var element1 = document.getElementById("categoria");
element1.innerHTML = pregunta.categoria;

var element2 = document.getElementById("respuesta1");
element2.innerHTML = posibles_respuestas[0];

var element3 = document.getElementById("respuesta2");
element3.innerHTML = posibles_respuestas[1];

var element4 = document.getElementById("respuesta3");
element4.innerHTML = posibles_respuestas[2];

var element5 = document.getElementById("respuesta4");
element5.innerHTML = posibles_respuestas[3];

}
function oprimir_btn(event) {
let respuesta_seleccionada = event.target.innerHTML
if (pregunta.respuesta == respuesta_seleccionada)
{
if(ronda_actual <= 3)
{
  dinero = dinero + 1000000
  ronda_actual = ronda_actual + 1
  siguiente_ronda(ronda_actual);
}
else if(ronda_actual == 4)
{
  dinero = dinero + 1000000
  ronda_actual = ronda_actual + 1
  elemento_puntaje = document.getElementById("puntaje");
  elemento_puntaje.innerHTML = dinero;
  alert("FELICIDADES GANASTE 5 MILLONES")
}
}
else{
  dinero  = 0 
  alert("INCORRECTA")
  window.location.reload()
}elemento_puntaje = document.getElementById("puntaje");
 elemento_puntaje.innerHTML = dinero;
}
function siguiente_ronda(ronda)
{
const categoria=preguntas.filter(pregunta => pregunta.categoria === rondas[ronda_actual])
pregunta=categoria[Math.floor(Math.random() * (5 - 0) + 0)]
posibles_respuestas = [
  pregunta.respuesta,
  pregunta.incorrecta1,
  pregunta.incorrecta2,
  pregunta.incorrecta3
]
posibles_respuestas.sort(() => Math.random() - 0.5)
var element = document.getElementById("pregunta");
element.innerHTML = pregunta.pregunta;

var element1 = document.getElementById("categoria");
element1.innerHTML = pregunta.categoria;

var element2 = document.getElementById("respuesta1");
element2.innerHTML = posibles_respuestas[0];

var element3 = document.getElementById("respuesta2");
element3.innerHTML = posibles_respuestas[1];

var element4 = document.getElementById("respuesta3");
element4.innerHTML = posibles_respuestas[2];

var element5 = document.getElementById("respuesta4");
element5.innerHTML = posibles_respuestas[3];
}
function myFunction() {
  var txt;
  var r = confirm("¿QUIERES TERMINAR EL JUEGO?");
  if (r == true) {
    window.location.reload()
  }
}
