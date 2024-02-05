// function to delete a post by its ID
const deletePost = async (post_id) => {
    try {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.reload(); // when successful, reload the page
      } else {
        throw new Error("failed to delete the post"); // throw an error when unsuccessful
      }
    } catch (error) {
      console.error(error);
      alert("failed to delete the post"); // show alert when there's an error
    }
  };
  
  // event handler for deleting a post
  const deletePostHandler = (event) => {
    if (event.target.matches(".delete-post")) {
      const post_id = event.target.getAttribute("data-post-id");
      deletePost(post_id); // call deletePost function with the post ID
    }
  };
  
  document.addEventListener("click", deletePostHandler); // add event listener to the document  
  
  
  