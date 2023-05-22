import React from "react";
import Post from "./Post";
const Posts = (props) => {
  const { data, set } = props;
  return (
    <div id="outContainer">
      <div id="inContainer">
        {data.map((post, index) => (
          <Post data={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
