function getMin(...args) {
    let minValue = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < minValue) {
            minValue = args[i];
        }
    }
    return minValue;
}

getMin(3, 0, -3);