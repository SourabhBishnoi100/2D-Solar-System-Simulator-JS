export function showPlanetInfo(planet) {
  const infoBox = document.getElementById("planet-info");
  document.getElementById("info-name").innerText = planet.name;
  document.getElementById("info-mass").innerText = planet.mass.toExponential(2);
  document.getElementById("info-distance").innerText = Math.sqrt(
    planet.x ** 2 + planet.y ** 2
  ).toExponential(2);
  document.getElementById("info-velocity").innerText = Math.sqrt(
    planet.veloX ** 2 + planet.veloY ** 2
  ).toFixed(2);

  infoBox.style.display = "block"; // Make the box visible
}
