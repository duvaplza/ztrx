const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const firefliesArray = [];
const numberOfFireflies = 50;
let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

const colors = [
  "rgba(255, 0, 255, 0.8)",
  "rgba(57, 255, 20, 0.8)",
  "rgba(0, 255, 255, 0.8)",
]; // Morado, Verde, Calipso

class Firefly {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.alpha = Math.random();
    this.speed = Math.random() * 2 + 0.5;
    this.angle = Math.random() * Math.PI * 2;
    this.color = colors[Math.floor(Math.random() * colors.length)]; // Color aleatorio
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  update() {
    this.angle += Math.random() * 0.2 - 0.1;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    ) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }

    // Seguimiento del ratón
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
      this.x -= dx / distance;
      this.y -= dy / distance;
    }

    this.draw();
  }
}

function init() {
  firefliesArray.length = 0;
  for (let i = 0; i < numberOfFireflies; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 3 + 1;
    firefliesArray.push(new Firefly(x, y, radius));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < firefliesArray.length; i++) {
    firefliesArray[i].update();
  }
  requestAnimationFrame(animate);
}

init();
animate();
