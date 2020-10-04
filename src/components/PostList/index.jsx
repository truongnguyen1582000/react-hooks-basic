import React from "react";
import PropTypes from "prop-types";

function PostList(props) {
  const { posts } = props;
  console.log("post in postList", posts);
  return (
    <div>
      <ul className="PostList">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
