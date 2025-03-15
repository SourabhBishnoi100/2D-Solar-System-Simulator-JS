import { Planet } from "./planetClass";

const Sun = new Planet("Sun", 0, 0, 0, 0, 20, 1.9e30, "yellow");
const Mercury = new Planet(
  "Mercury",
  5.79e10,
  0,
  0,
  47362,
  4,
  3.285e23,
  "gray"
);
const Venus = new Planet("Venus", 1.082e11, 0, 0, 35020, 6, 4.867e24, "orange");
const Earth = new Planet("Earth", 1.496e11, 0, 0, 29783, 8, 5.972e24, "blue");
const Mars = new Planet("Mars", 2.279e11, 0, 0, 24077, 6, 6.39e23, "red");
const Jupiter = new Planet(
  "Jupiter",
  7.785e11,
  0,
  0,
  13070,
  14,
  1.898e27,
  "brown"
);
const Saturn = new Planet("Saturn", 1.433e12, 0, 0, 9690, 12, 5.683e26, "gold");
const Uranus = new Planet("Uranus", 2.877e12, 0, 0, 6800, 10, 8.681e25, "cyan");
const Neptune = new Planet(
  "Neptune",
  4.503e12,
  0,
  0,
  5430,
  10,
  1.024e26,
  "darkblue"
);

export const planetsArray = [
  Sun,
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
];
