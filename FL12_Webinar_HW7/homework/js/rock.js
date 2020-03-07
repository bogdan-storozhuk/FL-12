import Paper from "./paper.js";
import Scissors from "./scissors.js";

export default class Rock {
  compare(shape) {
    if (shape instanceof Paper) {
      return "LOST";
    } else if (shape instanceof Rock) {
      return "DREW";
    } else if (shape instanceof Scissors) {
      return "WON";
    }
  }
  toString() {
    return "Rock";
  }
}
