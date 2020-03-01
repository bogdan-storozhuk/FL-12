export default class UserService {

    constructor() {
        this.path = 'https://jsonplaceholder.typicode.com';
    }
    getUsers = async () => {
        const response = await fetch(`${this.path}/users`);
        if (response == null) {
            throw new Error("Can not get response");
        }
        const users = await response.json();
        return users;
    }


    getUserById = async (id) => {
        const response = await fetch(`${this.path}/users/${id}`);
        if (response == null) {
            throw new Error("Can not get response");
        }
        const user = await response.json();
        return user;
    }
    updateUserById = async (id, userInstance) => {
        const response = await fetch(`${this.path}/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userInstance),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if (response == null) {
            throw new Error("Can not get response");
        }
        const json = await response.json();
        console.log(json);
    }
    deleteUserById = async (id) => {
        const response = await fetch(`${this.path}/users/${id}`, {
            method: 'DELETE'
        });
        if (response == null) {
            throw new Error("Can not get response");
        }
    }
    getUserPosts = async (id) => {
        const response = await fetch(`${this.path}/users/${id}/posts`);
        if (response == null) {
            throw new Error("Can not get response");
        }
        const posts = await response.json();
        return posts;
    }
    getPostComments = async (id) => {
        const response = await fetch(`${this.path}/posts/${id}/comments`);
        if (response == null) {
            throw new Error("Can not get response");
        }
        const comments = await response.json();
        return comments;
    }
}