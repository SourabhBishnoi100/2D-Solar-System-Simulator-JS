import { PlanetClass } from "./planetClass";
import { planetsArray } from "./planetsArray";
import { showPlanetInfo } from "./showPlanetInfo";

export function setEventListener(canvas) {
  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    planetsArray.forEach((planet) => {
      let planetX = planet.x / PlanetClass.SCALE + canvas.width / 2;
      let planetY = planet.y / PlanetClass.SCALE + canvas.height / 2;

      let dx = planetX - mouseX;
      let dy = planetY - mouseY;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < planet.radius) {
        showPlanetInfo(planet);
      }
    });
  });
}
