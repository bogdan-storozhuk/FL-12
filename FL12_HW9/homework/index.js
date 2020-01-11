function convert(...args) {
    let arr = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            arr.push(args[i].toString());
        } else {
            arr.push(Number.parseInt(args[i]))
        }
    }
    return arr;
}
convert('1', 2, 3, '4');

function executeforEach(elements, func) {
    for (let i = 0; i < elements.length; i++) {
        func(elements[i]);
    }
}
executeforEach([1, 2, 3], (el) => {
    console.log(el * 2)
});

function mapArray(elements, func) {
    let newElements = [];
    executeforEach(elements, (el) => {
        if (typeof el === 'string') {
            el = Number.parseInt(el);
        }
        newElements.push(func(el));
    });
    return newElements;
}

mapArray([2, '5', 8], (el) => {
    return el + 3
});

function filterArray(elements, func) {
    let arr = [];
    executeforEach(elements, (el) => {
        if (func(el)) {
            arr.push(el);
        }
    });
    return arr;
}
filterArray([2, 5, 8], (el) => {
    return el % 2 === 0;
});

function flipOver(text) {
    let newText = '';
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i];
    }
    return newText;
}
flipOver('hey world');

function makeListFromRange(range) {
    let arr = [];
    for (let i = range[0]; i <= range[1]; i++) {
        arr.push(i);
    }
    return arr;
}

makeListFromRange([2, 7]);

function getArrayOfKeys(objArr, keyName) {
    let arr = [];
    executeforEach(objArr, (el) => {
        if (el[keyName] !== undefined) {
            arr.push(el[keyName]);
        }
    });
    return arr;
}

const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];

getArrayOfKeys(actors, 'name');

function substitute(elements) {
    const minNumber = 30;
    let arr = mapArray(elements, (el) => {
        if (el <= minNumber) {
            return '*'
        } else {
            return el;
        }
    });
    return arr;
}

substitute([58, 14, 48, 2, 31, 29]);

function getPastDay(date, days) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    let year = newDate.getFullYear(),
        month = months[newDate.getMonth()],
        dayNumber = newDate.getDate();
    return `${dayNumber}, (${dayNumber} ${month} ${year})`;
}

const date = new Date(2019, 0, 2);
getPastDay(date, 1);
getPastDay(date, 2);
getPastDay(date, 365);

function formatDate(date) {
    if (date instanceof Date && date !== undefined) {
        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            dayNumber = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        } else if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return `${year}/${month}/${dayNumber} ${hours}:${minutes}`;
    }
}

formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());