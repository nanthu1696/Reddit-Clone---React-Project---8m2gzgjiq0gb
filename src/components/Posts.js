import React from "react";
import Post from "./Post";
const Posts = (props) => {
  const { data, set, log, setPage } = props;
  return (
    <div id="outContainer">
      <div id="inContainer">
        {data.map((post, index) => (
          <Post
            key={index}
            index={index}
            data={post}
            log={log}
            setPage={setPage}
            set={set}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
