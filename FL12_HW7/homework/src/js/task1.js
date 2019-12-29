let password, changePass, oldPass, newPass, validPass;
const minPassSymbol = 5;
const minNewPassSymbol = 6;
let login = {
    user: {
        email: 'user@gmail.com',
        password: 'UserPass'
    },
    admin: {
        email: 'admin@gmail.com',
        password: 'AdminPass'
    }
}
let email = prompt(' Enter email', '');

switch (true) {
    case email === null:    
    default:
        alert('Canceled.');
        break;
    case email === login.user.email:
    case email === login.admin.email:
       password = prompt('Enter password', '');
        break;
    case email.length < minPassSymbol && email !== null && email.length !== 0:
        alert(`I don't know any emails having name length less than 5 symbols`);
        break;
    case email !== null && email.length >= minPassSymbol:
        alert(`I don’t know you`);
        break;
}
switch (password) {
    case login.user.password:
    case login.admin.password:
        changePass = confirm('Do you want to change your password?');
        break;
        case null:
            default:
                alert('Wrong password');
                break;
    
}
switch (changePass) {
    case true:
        oldPass = prompt(`Write the old password`);
        break;
case false:
    default:
        alert('You have failed the change.')
        break;
    }
switch (oldPass) {
    case login.user.password:
    case login.admin.password:
        newPass = prompt(`Enter new password`);
        break;
case null:
    default:
        alert('Canceled.');
        break;
}
switch (true) {
    case newPass.length < minNewPassSymbol:
        alert('It’s too short password. Sorry.');
        break;
    case newPass.length >= minNewPassSymbol:
        validPass = prompt(`Enter password agen`);
        break;
    default:
        break;
}
switch (true) {
    case newPass === validPass:
        alert('You have successfully changed your password.');
        break;
    default:
        alert('You wrote the wrong password');
        break;
}