export class PlanetClass {
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

    this.trail = [];
    this.trailLength = 100;
  }

  updatePosition(planets) {
    let ax = 0;
    let ay = 0;

    for (let other of planets) {
      if (other !== this) {
        let dx = other.x - this.x;
        let dy = other.y - this.y;

        let distanceSquared = dx * dx + dy * dy;

        let Force =
          (PlanetClass.G * (this.mass * other.mass)) / distanceSquared;

        // let angle = Math.atan2(dy, dx);

        ax += (Force / this.mass) * (dx / Math.sqrt(distanceSquared));
        ay += (Force / this.mass) * (dy / Math.sqrt(distanceSquared));
      }
    }

    this.veloX += ax * PlanetClass.TIME_STEP;
    this.veloY += ay * PlanetClass.TIME_STEP;
    this.x += this.veloX * PlanetClass.TIME_STEP;
    this.y += this.veloY * PlanetClass.TIME_STEP;

    this.trail.push({ x: this.x, y: this.y });

    if (this.trail.length > this.trailLength) {
      this.trail.shift();
      // if trail has more than 100 elements it will remove the oldest point to preserve memory
    }
  }

  draw(ctx, width, height) {
    //Draw the trail
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    for (let i = 0; i < this.trail.length - 2; i++) {
      let p1 = this.trail[i];
      let p2 = this.trail[i + 1];

      ctx.moveTo(
        p1.x / PlanetClass.SCALE + width / 2,
        p1.y / PlanetClass.SCALE + height / 2
      );
      ctx.lineTo(
        p2.x / PlanetClass.SCALE + width / 2,
        p2.y / PlanetClass.SCALE + height / 2
      );
    }
    ctx.stroke();

    //Draw the planets updated position
    ctx.beginPath();
    ctx.arc(
      this.x / PlanetClass.SCALE + width / 2,
      this.y / PlanetClass.SCALE + height / 2,
      this.radius,
      0,
      Math.PI * 2,
      true
    );
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
