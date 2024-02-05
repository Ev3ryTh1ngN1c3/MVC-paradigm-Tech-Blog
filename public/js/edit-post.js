 // get the post ID from the endpoint
const post_id = window.location.toString().split("/")[window.location.toString().split("/").length - 1];

// update the post
const updatePostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-update-post").value.trim();
  const content = document.querySelector("#content-update-post").value.trim();

  if (title && content) {
    try {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/dashboard"); // when successful, load the dashboard page
      } else {
        throw new Error("failed to update a post"); // throw an error when unsuccessful
      }
    } catch (error) {
      console.error(error);
      alert("failed to update a post"); // show alert when there's an error
    }
  }
};

// delete the post
const deletePostFormHandler = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard"); // when successful, load the dashboard page
    } else {
      throw new Error("failed to delete a post."); // throw an error when unsuccessful
    }
  } catch (error) {
    console.error(error);
    alert("failed to delete a post."); // show alert when there's an error
  }
};

// event listeners
const updatePostButton = document.querySelector("#update-post");
if (updatePostButton) {
  updatePostButton.addEventListener("click", updatePostFormHandler); // add event listener for updating a post
}

const deletePostButton = document.querySelector("#delete-post");
if (deletePostButton) {
  deletePostButton.addEventListener("click", deletePostFormHandler); // add event listener for deleting a post
}