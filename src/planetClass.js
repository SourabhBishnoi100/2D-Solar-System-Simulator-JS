export class Planet {
  static G = 6.6743e-11; // Gravitational constant
  static SCALE = 1e9; // Scaling factor for distances
  static TIME_STEP = 60 * 60 * 24; // 1 day in seconds

  constructor(name, x, y, veloX, veloY, radius, mass, color) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.veloX = veloX;
    this.veloY = veloY;

    this.radius = radius;
    this.mass = mass;
    this.color = color;
  }

  updatePosition(planets) {
    let ax = 0;
    let ay = 0;

    for (let other of planets) {
      if (other !== this) {
        let dx = other.x - this.x;
        let dy = other.y - this.y;

        let distanceSquared = dx * dx + dy * dy;

        let Force = (Planet.G * (this.mass * other.mass)) / distanceSquared;

        // let angle = Math.atan2(dy, dx);

        ax += (Force / this.mass) * (dx / Math.sqrt(distanceSquared));
        ay += (Force / this.mass) * (dy / Math.sqrt(distanceSquared));
      }
    }

    this.veloX += ax * Planet.TIME_STEP;
    this.veloY += ay * Planet.TIME_STEP;
    this.x += this.veloX * Planet.TIME_STEP;
    this.y += this.veloY * Planet.TIME_STEP;
  }

  draw(ctx, width, height) {
    ctx.beginPath();
    ctx.arc(
      this.x / Planet.SCALE + width / 2,
      this.y / Planet.SCALE + height / 2,
      this.radius,
      0,
      Math.PI * 2,
      true
    );
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
