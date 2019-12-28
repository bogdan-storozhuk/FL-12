function addOne(x) {
    return x + 1;
}

function pipe(number, ...funcs) {
    funcs.forEach(func => {
        number = func(number);
    });
    return number;
}

pipe(1, addOne);
pipe(1, addOne, addOne);