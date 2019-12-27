const minEmailLength = 5,
    minPasswordLength = 6;
let email = prompt('Input email:'),
    password,
    passwordRepeat,
    emailError,
    passwordError,
    passwordChangeError,
    isChangePassword,
    users = {
        'user@gmail.com': 'UserPass',
        'admin@gmail.com': 'AdminPass'
    };

if (!email) {
    emailError = 'Canceled.';
} else if (email.length < minEmailLength) {
    emailError = `I don't know any emails having name length less than 5 symbols`;
} else if (users[email]) {
    password = prompt('Input password:');
} else {
    emailError = 'I don’t know you';
}

if (!emailError) {
    if (!password) {
        passwordError = 'Canceled.';
    } else if (password === users[email]) {
        isChangePassword = confirm('Do you want to change your password?')
    } else {
        passwordError = 'Wrong password';
    }
} else {
    alert(`${emailError}`);
}

if (passwordError) {
    alert(`${passwordError}`);
}

if (isChangePassword) {
    password = prompt('Input old password:');
    if (!password) {
        passwordChangeError = 'Canceled.';
    } else if (password === users[email]) {
        password = prompt('Input new password:');
        if (!password) {
            passwordChangeError = 'Canceled.';
        } else if (password.length < minPasswordLength) {
            passwordChangeError = 'It’s too short password. Sorry.';
        } else {
            passwordRepeat = prompt('Please re-enter new password');
            if (password === passwordRepeat) {
                alert('You have successfully changed your password.');
            } else if (!passwordRepeat) {
                passwordChangeError = 'Canceled.';
            } else {
                passwordChangeError = 'You wrote the wrong password.';
            }
        }
    } else {
        passwordChangeError = 'Wrong password';
    }
} else if (!emailError && !passwordError) {
    passwordChangeError = 'You have failed the change.';
}

if (passwordChangeError) {
    alert(passwordChangeError);
}