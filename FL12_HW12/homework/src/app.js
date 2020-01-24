let rootElement = document.getElementById('root');

function mainPageRender() {
    let addButton = document.createElement('button'),
        list = document.createElement('ul');
    addButton.textContent = 'Add new';
    addButton.classList.add('add_button');
    rootElement.appendChild(addButton);
    rootElement.appendChild(list);
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        let item = document.createElement('li'),
            termItem = document.createElement('span'),
            spaceItem = document.createElement('span'),
            definitionItem = document.createElement('span'),
            removeButton = document.createElement('button'),
            editButton = document.createElement('button');
        termItem.textContent = key;
        spaceItem.textContent = ' - ';
        definitionItem.textContent = localStorage.getItem(key);
        removeButton.textContent = 'Remove';
        editButton.textContent = 'Edit';
        removeButton.addEventListener('click', () => {
            localStorage.removeItem(key);
            location.reload();
        });
        editButton.addEventListener('click', () => {
            location.hash = `/modify/${key}`;
            location.reload();
        });
        list.appendChild(item);
        item.appendChild(termItem);
        item.appendChild(spaceItem);
        item.appendChild(definitionItem);
        item.appendChild(removeButton);
        item.appendChild(editButton);
    }

    addButton.addEventListener('click', () => {
        location.hash = '/add';
        // rootElement.removeChild(addButton);
        location.reload();
    });
}

function addSetPageRender() {
    let term = document.createElement('input'),
        definition = document.createElement('input'),
        confirmButton = document.createElement('button'),
        cancelButton = document.createElement('button');
    term.placeholder = 'Enter term';
    definition.placeholder = 'Enter definition';
    term.type = 'text';
    definition.type = 'text';
    confirmButton.textContent = 'Save changes';
    cancelButton.textContent = 'Cancel';
    rootElement.appendChild(term);
    rootElement.appendChild(definition);
    rootElement.appendChild(confirmButton);
    rootElement.appendChild(cancelButton);
    confirmButton.addEventListener('click', () => {
        if (term.value && definition.value) {
            localStorage.setItem(term.value, definition.value);
            location.hash = '';
            location.reload();
        }
    });
    cancelButton.addEventListener('click', () => {
        location.hash = '';
        location.reload();
    });
}

function modifySetPageRender() {
    let term = document.createElement('input'),
        definition = document.createElement('input'),
        confirmButton = document.createElement('button'),
        cancelButton = document.createElement('button'),
        key = location.hash.replace('#/modify/', '');
    term.disabled = true;
    term.value = key;
    definition.value = localStorage.getItem(key);
    term.type = 'text';
    definition.type = 'text';
    confirmButton.textContent = 'Save changes';
    cancelButton.textContent = 'Cancel';
    rootElement.appendChild(term);
    rootElement.appendChild(definition);
    rootElement.appendChild(confirmButton);
    rootElement.appendChild(cancelButton);
    confirmButton.addEventListener('click', () => {
        if (term.value && definition.value) {
            localStorage.setItem(term.value, definition.value);
            location.hash = '';
            location.reload();
        }
    });
    cancelButton.addEventListener('click', () => {
        location.hash = '';
        location.reload();
    });
}

if (location.hash === '') {
    mainPageRender();
} else if (location.hash === '#/add') {
    addSetPageRender();
} else {
    modifySetPageRender();
}