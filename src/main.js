import "./style.css";
import { planetsArray } from "./planetsArray";
import { setEventListener } from "./clickPlanet";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

//resize canvas on window resize event
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

setEventListener(canvas);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  planetsArray.forEach((planet) => planet.updatePosition(planetsArray));
  planetsArray.forEach((planet) =>
    planet.draw(ctx, canvas.width, canvas.height)
  );
  requestAnimationFrame(update);
}

update();
