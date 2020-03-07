import Rock from "./rock.js";
import Scissors from "./scissors.js";

export default class Paper {
  compare(shape) {
    if (shape instanceof Paper) {
      return "DREW";
    } else if (shape instanceof Rock) {
      return "WON";
    } else if (shape instanceof Scissors) {
      return "LOST";
    }
  }
  toString() {
    return "Paper";
  }
}
