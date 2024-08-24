// countdown.js

// Set the date we're counting down to
var countDownDate = new Date("Aug 24, 2024 21:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);

    // Obtener el elemento con id "countdown"
    var countdownElement = document.getElementById("countdown");

    // Limpiar el contenido actual
    countdownElement.innerHTML = "";

    // Crear un elemento de imagen
    var img = document.createElement("img");
    img.src = "LINE UP.png"; // Ruta de la imagen
    img.alt = "Line Up"; // Texto alternativo para la imagen
    img.classList.add("line-up-image"); // Asigna la clase

    // Agregar la imagen al elemento countdown
    countdownElement.appendChild(img);

    // Crear un párrafo para la ubicación
    var locationText = document.createElement("p");
    locationText.innerHTML = "Ubicación: (-36.8357748, -73.0576628)"; // Puedes agregar más texto aquí si lo necesitas

    // Agregar el párrafo al elemento countdown
    countdownElement.appendChild(locationText);
  }
}

// Update the countdown immediately
updateCountdown();

// Update the countdown every 1 second
var x = setInterval(updateCountdown, 1000);

// Function to create balloons
function createBalloon(color, delay, duration) {
  var balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.backgroundColor = color;
  balloon.style.width = Math.random() * 30 + 50 + "px";
  balloon.style.height = Math.random() * 40 + 70 + "px";
  balloon.style.left = Math.random() * 100 + "%";
  balloon.style.animation = `floatUp ${duration}s linear ${delay}s forwards`;
  document.getElementById("background").appendChild(balloon);

  // Eventos para el ratón
  balloon.addEventListener("mouseover", () => {
    balloon.classList.add("bounce");
  });

  balloon.addEventListener("animationend", () => {
    balloon.classList.remove("bounce");
  });

  balloon.addEventListener("click", () => {
    balloon.style.animation = "explode 0.5s forwards";
    balloon.addEventListener("animationend", () => {
      balloon.remove();
    });
  });

  // Eventos para el toque en dispositivos móviles
  balloon.addEventListener("touchstart", () => {
    balloon.classList.add("bounce");
  });

  balloon.addEventListener("animationend", () => {
    balloon.classList.remove("bounce");
  });

  balloon.addEventListener("touchend", () => {
    balloon.style.animation = "explode 0.5s forwards";
    balloon.addEventListener("animationend", () => {
      balloon.remove();
    });
  });
}

// Create balloons with different colors, delays, and durations
const colors = [
  "#333333", // Gris oscuro
  "#555555", // Gris medio
  "#777777", // Gris claro
  "#ff0000", // Rojo
  "#800000", // Rojo oscuro
  "#660000", // Rojo más oscuro
];

const keyframes = `
@keyframes floatUp {
    0% {
        bottom: -150px;
        opacity: 1;
    }
    100% {
        bottom: 100vh;
        opacity: 0;
    }
}
`;

// Append keyframes to the document
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

function generateBalloons() {
  setInterval(() => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
    const duration = Math.random() * 5 + 5; // Random duration between 5 and 10 seconds
    createBalloon(color, delay, duration);
  }, 1000); // Generate a new balloon every second
}

// Start generating balloons
generateBalloons();
