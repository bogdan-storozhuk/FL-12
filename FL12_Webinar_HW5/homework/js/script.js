import UserService from '../js/UserService.js';
let userService = new UserService();

function addPropertyNode(key, value, userItem) {
    let propertyItem = $(`<li class="list-group-item list-group-item-action"></li>`).text(`${key}: ${value}`);
    userItem.append(propertyItem);
}

let isObject = (element) => typeof element === 'object' && element !== null;

let isInputMatchId = (input, textId) => input.id.indexOf(textId) > -1;

let addInstancePropertiesNodes = (listItemName, instance, htmlNodeItem) => {
    let propertyItem;
    if (listItemName === `User ${instance.id}`) {
        propertyItem = $(`<li class="list-group-item"><a href="../posts.html?userId=${instance.id}">${listItemName}</a></li>`);
    } else {
        propertyItem = $(`<li class="list-group-item">${listItemName}</li>`);
    }

    for (let property in instance) {
        if (isObject(instance[property])) {
            addInstancePropertiesNodes(property, instance[property], propertyItem);
        } else {
            addPropertyNode(property, instance[property], propertyItem);
        }
    }

    htmlNodeItem.append(propertyItem);
}

function ShowSpinner() {
    $('#spinner').show();
}

function HideSpinner() {
    $('#spinner').hide();
}

let addUserNode = (userItem, userObject) => {
    let userPropertyList = $(`<ul class="list-group list-group-flush"></ul>`);

    addInstancePropertiesNodes(`User ${userObject.id}`, userObject, userPropertyList);
    userItem.append(userPropertyList);
}

function fillUserEditPopup(rootElement, instance, instanceTitle) {
    if (instanceTitle) {
        let title = $(`<h2 class="text-primary">${instanceTitle}</h2>`);
        rootElement.append(title)
    }

    for (let property in instance) {
        if (isObject(instance[property])) {
            fillUserEditPopup(rootElement, instance[property], property);
        } else {
            let formGroup = $(`<div class="form-group"></div>`);
            let label = $(`<label class="edit-labels" for="${property}${instanceTitle?'-'+instanceTitle:''}-element">${property}</label>`);
            let input = $(`<input type="text" class="edit-inputs form-control" id="${property}${instanceTitle?'-'+instanceTitle:''}-element" value=${instance[property]}>`);
            formGroup.append(label);
            formGroup.append(input);
            rootElement.append(formGroup);
        }
    }
}

function FillUpdatedUser() {
    let updatedUser = {},
        editElementInputs = document.querySelectorAll('.edit-inputs'),
        editElementLabels = document.querySelectorAll('.edit-labels'),
        input, label;
    updatedUser.adress = {};
    updatedUser.company = {};
    updatedUser.company.geo = {};
    for (let index = 0; index < editElementInputs.length; index++) {
        input = editElementInputs[index];
        label = editElementLabels[index];
        if (isInputMatchId(input, "address")) {
            updatedUser.adress[label.textContent] = input.value;
        } else if (isInputMatchId(input, "geo")) {
            updatedUser.company.geo[label.textContent] = input.value;
        } else if (isInputMatchId(input, "company")) {
            updatedUser.company[label.textContent] = input.value;
        } else {
            updatedUser[label.textContent] = input.value;
        }
    }

    return updatedUser;
}

ShowSpinner();

userService.getUsers()
    .then(users => {
        users.forEach(user => {
            let userItem = $(`<li class="list-group-item"></li>`);
            addUserNode(userItem, user);
            $(".user-list").append(userItem);
            let editButton = $(`<button class="edit-button btn btn-primary mt-2 mr-2" data-toggle="modal" data-target="#myModal" id=${user.id}>Edit</button>`),
                deleteButton = $(`<button class="delete-button btn btn-primary mt-2" id=${user.id}>Delete</button>`);
            userItem.append(editButton);
            userItem.append(deleteButton);
            HideSpinner();
        });
    }).catch((error) => {
        console.log(error);
        HideSpinner();
    });

$(document).on('click', '.delete-button', function (event) {
    ShowSpinner()
    userService.deleteUserById(event.target.id)
        .then(() => HideSpinner())
        .catch((error) => {
            console.log(error);
            HideSpinner();
        });
})
$(document).on('click', '.edit-button', function (event) {
    ShowSpinner();
    userService.getUserById(event.target.id)
        .then(user => {
            $('.modal-title').text(`User ${user.id}`);
            let modalBody = $('.modal-body');
            fillUserEditPopup(modalBody, user);
            $('#myModal').on('hide.bs.modal', () => {
                modalBody.empty();
            });

            $('.submit-button').on('click', () => {
                ShowSpinner();
                let updatedUser = FillUpdatedUser();
                userService.updateUserById(event.target.id, updatedUser)
                    .then(() => HideSpinner())
                    .catch((error) => {
                        console.log(error);
                        HideSpinner();
                    });
            });
        });
    HideSpinner();
})