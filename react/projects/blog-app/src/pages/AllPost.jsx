import React from "react";
import { useOutletContext, Link } from "react-router";

export default function AllPost() {
  const { posts } = useOutletContext();
  return (
    <>
      <h1>All Posts</h1>
      {posts.length === 0 ? (
        <p> "No posts to show." </p>
      ) : (
        <>
          <div className="card d-flex flex-column align-items-center">
            <div className="card-body w-50 d-flex flex-column gap-2">
              <ul style={{ listStyle: "none" }}>
                {posts.map((post) => (
                  <li key={post.id} className="mb-3">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <Link to={`/posts/${post.id}`} class="btn btn-primary">
                      View Post
                    </Link>
                    <Link to={`/posts/${post.id}/edit`} class="btn btn-primary">
                      Edit Post
                    </Link>
                    <p className="card-text">
                      Created at:{" "}
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}
