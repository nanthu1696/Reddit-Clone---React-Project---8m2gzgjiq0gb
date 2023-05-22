import React from "react";

const Navigation = (props) => {
  const { log, set } = props;
  return (
    <div id="navigationbar">
      {log ? (
        <>
          <button>Add new post</button>
          <button onClick={() => set(false)}>Log out</button>
        </>
      ) : (
        <button onClick={() => set(true)}>Log in</button>
      )}
    </div>
  );
};

export default Navigation;
