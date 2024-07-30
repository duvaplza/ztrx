window.addEventListener("load", () => {
  const titles = document.querySelectorAll(".main-title, .sub-title");

  titles.forEach((title) => {
    // Eventos para el ratón
    title.addEventListener("mouseover", () => {
      title.classList.add("bounce");
    });

    title.addEventListener("animationend", () => {
      title.classList.remove("bounce");
    });

    // Eventos para el toque en dispositivos móviles
    title.addEventListener("touchstart", () => {
      title.classList.add("bounce");
    });

    title.addEventListener("animationend", () => {
      title.classList.remove("bounce");
    });
  });

  const balloons = document.querySelectorAll(".balloon");

  balloons.forEach((balloon) => {
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
  });
});

// Efecto de rebote y explosión
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
  }
  40% {
      transform: translateY(-30px);
  }
  60% {
      transform: translateY(-15px);
  }
}

.bounce {
  animation: bounce 1s;
}

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

@keyframes explode {
  0% {
      transform: scale(1);
      opacity: 1;
  }
  100% {
      transform: scale(2);
      opacity: 0;
  }
}
`;
document.head.appendChild(styleSheet);
