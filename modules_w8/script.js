import { sum, mult } from "./helper1.js"
import { sub } from "./helper2.js"

function calculate(a, b, op) {
    if (op === "+") {
        console.log(sum(a, b))
    } else if (op === "-") {
        console.log(sub(a, b))
    } else if (op === "*") {
        console.log(mult(a, b))
    } else {
        return "wrong";
    }
}

calculate(5 , 6 , "+");
calculate(5 , 6 , "*");
calculate(5 , 6 , "-");
