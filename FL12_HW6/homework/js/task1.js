let a = +prompt('Input A value:');
let b = +prompt('Input B value:');
let c = +prompt('Input C value:');
let d;
isNaN(a) || a === 0 || isNaN(b) || isNaN(c) ? console.log('Invalid input data') :
    d = Math.pow(b, 2) - 4 * a * c;
if (d !== undefined) {
    if (d < 0) {
        console.log('no solution');
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(`x1 = ${x1}  and x2 = ${x2}`);
    } else {
        let x = -b / 2 * a;
        console.log(`x = ${x}`);
    }
}