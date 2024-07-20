function countdown() {
  const eventDate = new Date("July 20, 2024 18:30:59").getTime(); // Establecer una fecha pasada para prueba
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance >= 0) {
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      hours + "h " + minutes + "m " + seconds + "s ";
  } else {
    clearInterval(countdownInterval);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("secret-spot").style.display = "block";
  }
}

countdown(); // Ejecutar una vez para evitar el delay inicial
const countdownInterval = setInterval(countdown, 1000);
