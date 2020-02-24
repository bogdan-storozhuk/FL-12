function maxElement(elements) {
    return Math.max(...elements);
}

function copyArray(elements) {
    return [...elements];
}

function addUniqueId(object) {
    let uniqueId = `f${(+new Date).toString(16)}`;
    return {
        id: Symbol(uniqueId),
        ...object
    }
}

function regroupObject(object) {
    const {
        name: firstName,
    } = object;
    const {
        id,
        age,
        university
    } = object.details
    return {
        university,
        user: {
            age,
            firstName,
            id
        }
    }
}

function findUniqueElements(elements) {
    let set = new Set();
    elements.forEach(element => {
        set.add(element)
    });
    return set;
}

function hideNumber(phoneNumber) {
    return phoneNumber.split('').splice(6, 4).join('').padStart(10, "*");
}

const required = () => {
    throw new Error(`Missing property`);
};

function add(a = required(), b = required()) {
    return a + b;
}

function fetchUserData(yourUser) {
    fetch(`https://api.github.com/users/${yourUser}/repos`)
        .then(request => request.json())
        .then(res => {
            res.sort().forEach(element => console.log(element.name));
        })
        .catch(error => console.log(`ERROR: ${error.stack}`));
}

async function fetchUserDatav2(yourUser) {
    try {
        let fetchedData = await fetch(`https://api.github.com/users/${yourUser}/repos`),
            users = await fetchedData.json();
        users.sort().forEach(element => console.log(element.name));
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}