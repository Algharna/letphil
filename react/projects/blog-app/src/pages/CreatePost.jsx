import React from "react";

export default function CreatePost() {
  return (
    <div>
      <h1>Create Post</h1>
      <div className="d-flex flex-column mb-3 align-items-center">
        <form className="form-group w-50 d-flex flex-column gap-2">
          <input class="form-control" type="text" placeholder="Title"></input>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Post text here.."
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}
