import { Planet } from "./planetClass";

const Sun = new Planet("Sun", 0, 0, 0, 0, 20, 1.9e30, "yellow");
const Earth = new Planet("Earth", 1.5e11, 0, 0, 29783, 8, 5.9e24, "blue");

export const planetsArray = [Sun, Earth];
