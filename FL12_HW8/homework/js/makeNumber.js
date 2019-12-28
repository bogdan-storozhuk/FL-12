function makeNumber(text) {
    let numberText = '';
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text[i])) {
            numberText += text[i];
        }
    }
    return numberText;
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');