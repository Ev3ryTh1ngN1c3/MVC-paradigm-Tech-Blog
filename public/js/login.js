 // handler function for login form submission
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // get the values of the username & password input fields
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // if the input fields have values
    if (username && password) {
      try {
        // send a POST request to the login endpoint with the input values as JSON data
        const response = await fetch('/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        // if the request was successful, redirect to the homepage
        if (response.ok) {
          document.location.replace('/'); // when successful, load the homepage
        } else {
          throw new Error('failed to log in'); // throw an error when unsuccessful
        }
      } catch (error) {
        console.error(error);
        alert('failed to log in'); // show alert when there's an error
      }
    }
  };
  
  // event listener for the login form
  const loginForm = document.querySelector('#loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', loginFormHandler);
  }