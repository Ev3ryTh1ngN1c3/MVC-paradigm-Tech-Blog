 // logout function to send request to log out the user
const logout = async () => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); // when successful, load the homepage
      } else {
        throw new Error('failed to log out'); // throw an error when unsuccessful
      }
    } catch (error) {
      console.error(error);
      alert('failed to log out'); // show alert when there's an error
    }
  };
  
  // add an event listener to the logout button
  const logoutButton = document.querySelector('#logout');
  if (logoutButton) {
    logoutButton.addEventListener('click', logout);
  }