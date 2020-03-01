import UserService from '../js/UserService.js';
let userService = new UserService();
let id = GetUserIdFromUrl();

function GetUserIdFromUrl() {
    return window.location.search.split('').slice(8, 10).join('');
}

function fillWithPosts(root, posts) {
    posts.forEach(element => {
        let postElement = $(`<div class="post"></div>`),
            title = $(`<h1></h1>`).text(element.title),
            text = $(`<p></p>`).text(element.body)
        postElement.append(title);
        postElement.append(text);
        root.append(postElement);
        ShowSpinner();
        userService.getPostComments(element.id)
            .then(comments => {
                fillPostWithComments(postElement, comments);
                HideSpinner();
            })
    });
}

function fillPostWithComments(root, comments) {
    let commentListElement = $(`<ul class="comments list-group"></ul>`);
    comments.forEach(element => {
        let comment = $(`<li class="list-group-item bg-secondary"></li>`),
            name = $(`<h5></h5>`).text(element.name),
            email = $(`<small></small>`).text(element.email),
            text = $(`<p></p>`).text(element.body);
        comment.append(name);
        comment.append(email);
        comment.append(text);
        commentListElement.append(comment);
    });
    root.append(commentListElement);
}
ShowSpinner();
userService.getUserPosts(id)
    .then(posts => {
        let postsContainer = $('.posts');
        fillWithPosts(postsContainer, posts);
        HideSpinner();
    })

function ShowSpinner() {
    $('#spinner').show();
}

function HideSpinner() {
    $('#spinner').hide();
}