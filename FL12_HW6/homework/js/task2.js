let a = +prompt('Input A value:');
let b = +prompt('Input B value:');
let c = +prompt('Input C value:');
let triangleExists;
if (!a || !b || !c) {
    alert('input values should be ONLY numbers');

} else {
    if (a <= 0 || b <= 0 || c <= 0) {
        alert('A triangle must have 3 sides with a positive definite length');
    } else {
        if (a + b <= c || a + c <= b || b + c <= a) {
            triangleExists = false;
            alert('Triangle doesn’t exist');
        } else {
            triangleExists = true;
        }
    }
}
if (triangleExists !== undefined) {
    if (triangleExists) {
        if (a === b && b === c) {
            console.log('Equilateral triangle');
        } else if (a === b || b === c || c === a) {
            console.log('Isosceles triangle');
        } else {
            console.log('Scalene triangle');
        }
    } else {
        console.log('Triangle doesn’t exist')
    }
}