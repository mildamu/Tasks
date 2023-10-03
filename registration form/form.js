document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var passwordRepeat = document.getElementById('passwordRepeat').value;
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;

    var errors = [];
      if (!username) {
        errors.push('Username is required');
      }
      if (!password) {
        errors.push('Password is required');
      }
      if (password !== passwordRepeat) {
        errors.push('Passwords do not match');
      }
      if (!email) {
        errors.push('Email is required');
      }
      if (errors.length > 0) {
        var errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = errors.join('<br>');
        document.body.appendChild(errorElement);
      } else {
        alert('Form submitted!');
    }
});