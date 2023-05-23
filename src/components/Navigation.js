import React, { useState } from "react";
import Login from "./Login";
import NewPost from "./NewPost";

const Navigation = (props) => {
  const { log, set, setpost, data, page, setPage } = props;
  const [newPost, setNewPost] = useState(false);
  const [loggeduser, setloggeduser] = useState("");
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
      {page && <Login set={setPage} setlog={set} setUser={setloggeduser} />}
      {newPost && (
        <NewPost
          set={setNewPost}
          setpost={setpost}
          user={loggeduser}
          data={data}
        />
      )}
    </>
  );
};

export default Navigation;
