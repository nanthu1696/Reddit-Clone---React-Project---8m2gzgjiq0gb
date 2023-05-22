import React from "react";

const Navigation = (props) => {
  const { log, set } = props;
  return (
    <div id="navigationbar">
      <h1>Reddit</h1>
      {log ? (
        <div>
          <button>Add new post</button>
          <button onClick={() => set(false)}>Log out</button>
        </div>
      ) : (
        <button onClick={() => set(true)}>Log in</button>
      )}
    </div>
  );
};

export default Navigation;
