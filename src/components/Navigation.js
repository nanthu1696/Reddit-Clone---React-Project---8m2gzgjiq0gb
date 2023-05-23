import React, { useState } from "react";
import Login from "./Login";
import NewPost from "./NewPost";

const Navigation = (props) => {
  const { log, set } = props;
  const [page, setPage] = useState(false);
  const [newPost, setNewPost] = useState(false);
  return (
    <>
      <div id="navigationbar">
        <h1>Reddit</h1>
        {log ? (
          <div>
            <button onClick={() => setNewPost(true)}>Add new post</button>
            <button onClick={() => set(false)}>Log out</button>
          </div>
        ) : (
          <button onClick={() => setPage(true)}>Log in</button>
        )}
      </div>
      {page && <Login set={setPage} setlog={set} />}
      {newPost && <NewPost set={setNewPost} />}
    </>
  );
};

export default Navigation;
