import Rock from "./rock.js";
import Paper from "./paper.js";

export default class Scissors {
  compare(shape) {
    if (shape instanceof Paper) {
      return "WON";
    } else if (shape instanceof Rock) {
      return "LOST";
    } else if (shape instanceof Scissors) {
      return "DREW";
    }
  }
  toString() {
    return "Scissors";
  }
}
