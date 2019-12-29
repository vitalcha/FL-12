let userEmail = 'user@gmail.com',
  adminEmail = 'admin@gmail.com',
  userPass = 'UserPass',
  adminPass = 'AdminPass';
const minLoginLength = 5;
const minPassLength = 6;
let mailInput = prompt('Please enter your email');

if (mailInput === '' || mailInput === null) {
  alert('Canceled.');
} else if (mailInput.length < minLoginLength) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (mailInput === userEmail || mailInput === adminEmail) {
  let inputPassword = prompt('Please enter your password');
  if (inputPassword === '' || inputPassword === null) {
    alert('Verification canceled.');
  } else if (mailInput === userEmail && inputPassword === 'UserPass' ||
    mailInput === adminEmail && inputPassword === 'AdminPass') {
    let isPasswordChange = confirm('Do you want to change your password?')
    if (isPasswordChange === true) {
      let oldPassword = prompt('Please enter your old password:');
      if (oldPassword === inputPassword) {
        let newPassword = prompt('Please enter your new password:');
        if (newPassword === '' || newPassword === null) {
          alert('Password change canceled.');
        } else if (newPassword.length < minPassLength) {
          alert('It\'s too short password. Sorry.');
        } else if (prompt('Please enter your new password again:') === newPassword) {
          alert('You have successfully changed your password.');
        } else {
          alert('Your password doesn\'t match.');
        }
      } else {
        alert('You wrote the wrong password.');
      }
    } else {
      alert('You have failed the change.');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}