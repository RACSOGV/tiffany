// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "TE AMO Y MAS", time: 7 },
  { text: "DE LO QUE PUEDES IMAGINAR", time: 11 },
  { text: "TE AMO ADEMAS", time: 15 },
  { text: "COMO NUNCA NADIE JAMAS LO HARA", time: 17 },
  { text: "EN ESTA CANCION", time: 22 },
  { text: "VA MI CORAZON", time: 25},
  { text: "AMOR MAS QUE AMOR", time: 28 },
  { text: "ES EL NUESTRO Y TE LO VENGO A DAR", time: 30 },
  { text: "TE MIRO Y MAS", time: 35 },
  { text: "Y MAS Y MAS TE QUIERO MIRAR", time: 39 },
  { text: "TE AMO Y SABRAS", time: 42 },
  { text: "PURO SENTIMIENTO Y NO HAY NADA MAS", time: 46 },
  { text: "Y SUEÑO LLEGAR", time: 51 },
  { text: "A TU ALMA TOCAR", time: 53 },
  { text: "AMOR MAS QUE AMOR ES EL NUESTRO Y TE LO VENGO A DAR", time: 56 },
  { text: "RUEGO A ADIOS TENERTE A MI LADO", time: 1.04 },
  { text: "Y ENTONCES PODERTE ABRAZAR", time: 1.10 },
  { text: "SI NO ESTAS AQUI ALGO FALTA", time: 1.18 },
  { text: "YO POR TI PELEARE HASTA EL FINAL", time: 1.24 },
  { text: "Y SUEÑO LLEGAR", time: 1.45 },
  { text: "A TU ALMA TOCAR", time: 1.48 },
  { text: "AMOR MAS QUE AMOR ES EL NUESTRO Y TE LO VENGO A DAR", time: 1.52 },
  { text: "TE AMO Y MAS", time: 1.59 },
  { text: "TE AMO Y SABRAS", time: 2.06 },
  { text: "QUE NADIE COMO YO TE AMARA", time: 2.09 },
  { text: "EN ESTA CANCION", time: 2.12 },
  { text: "YO VEO QUIEN SOY", time: 2.16 },
  { text: "AMOR MAS QUE AMOR ES EL MIO Y LO SIENTO", time: 2.21 },
  { text: "AMOR MAS QUE AMOR ES EL TUYO Y PRESIENTO", time: 2.23 },
  { text: "AMOR MAS QUE AMOR ES EL NUESTRO", time: 2.27 },
  { text: "SI TU ME LO DAS", time: 2.30 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);