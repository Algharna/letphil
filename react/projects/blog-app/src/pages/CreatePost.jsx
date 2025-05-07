import { React, useState } from "react";
import { useOutletContext } from "react-router";

export default function CreatePost() {
  const { posts, setPosts } = useOutletContext();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit() {
    if (!title || !body) {
      alert("Enter a title and message.");
      return;
    }
    const newPost = {
      title,
      id: new Date().getTime(),
      body,
      createdAt: new Date().toISOString(),
      editedAt: null,
    };

    // const updatedPosts = [...posts, newPost];
    // setPosts(updatedPosts);
    setPosts([...posts, newPost]);
    // localStorage.setItem("posts", JSON.stringify(updatedPosts));
    // console.log(updatedPosts); // Should be an array
    // console.log(JSON.stringify(updatedPosts)); // Should be readable JSON
    // console.log(title);
    setTitle("");
    setBody("");
  }
  return (
    <div>
      <h1>Create Post</h1>
      <div className="d-flex flex-column mb-3 align-items-center">
        <div className="form-group w-50 d-flex flex-column gap-2">
          <input
            class="form-control"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Enter a message.."
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit Post
          </button>
        </div>
      </div>
    </div>
  );
}
