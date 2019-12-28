function makeNumber(text) {
    let numberText = '';
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text[i])) {
            numberText += text[i];
        }
    }
    return numberText;
}

function countNumbers(text) {
    let numbers = {},
        numberText = makeNumber(text),
        symbol;
    for (let i = 0; i < numberText.length; i++) {
        symbol = numberText[i];
        if (!numbers[symbol]) {
            numbers[symbol] = 1;
        } else {
            numbers[symbol] += 1;
        }
    }
    return numbers;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');