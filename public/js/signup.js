 // signup request
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // get the values of the username, email & password input fields
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && email && password) {
      try {
        // send a POST request to the signup endpoint with the input values as JSON data
        const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/'); // when successful, load the homepage
        } else {
          throw new Error('failed to sign up'); // throw an error when unsuccessful
        }
      } catch (error) {
        console.error(error);
        alert('failed to sign up'); // show alert when there's an error
      }
    }
  };
  
  // event listener
  const signupForm = document.querySelector('#signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler); // add event listener for signup form submission
  }