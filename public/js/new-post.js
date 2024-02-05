 // create new post
const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    // get the values of the title & content input fields
    const title = document.querySelector('#title-new-tech-post').value.trim();
    const content = document.querySelector('#content-new-tech-post').value.trim();
  
    if (title && content) {
      try {
        // send a POST request to create a new post
        const response = await fetch('/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/dashboard'); // when successful, load the dashboard page
        } else {
          throw new Error('failed to create a new post'); // throw an error when unsuccessful
        }
      } catch (error) {
        console.error(error);
        alert('failed to create a new post'); // show alert when there's an error
      }
    }
  };
  
  // event listeners
  const newPostForm = document.querySelector('#form');
  if (newPostForm) {
    newPostForm.addEventListener('submit', newPostFormHandler); // add event listener for creating a new post
  }
  