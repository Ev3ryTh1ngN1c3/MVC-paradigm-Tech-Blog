// handler function for submitting a new comment
const newCommentFormHandler = async (event) => {
    event.preventDefault();
  
    // get the post ID from the URL
    const post_id = parseInt(window.location.pathname.split('/').pop());
  
    // get the content of the new comment
    const content = document.querySelector('#content-new-comment').value.trim();
  
    if (content) {
      try {
        // send a POST request to create a new comment
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ comment_text: content, post_id }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.reload(); // when successful, reload the same page
        } else {
          console.log('Response status:', response.status);
          console.log('Response text:', await response.text());
          throw new Error('failed to create a comment.'); // throw an error when unsuccessful
        }
      } catch (error) {
        console.error(error);
        alert('failed to create a comment.'); // show alert when there's an error
      }
    }
  };
  
  // event listeners
  const newCommentForm = document.querySelector('.new-comment-form');
  if (newCommentForm) {
    newCommentForm.addEventListener('submit', newCommentFormHandler); // add event listener for submitting a new comment
  }