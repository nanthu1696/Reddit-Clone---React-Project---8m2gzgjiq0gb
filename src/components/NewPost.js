import React from "react";

const NewPost = (props) => {
  const { set } = props;
  function addPost() {}
  return (
    <div className="popup">
      <div id="newpostcontainer">
        <span className="close" onClick={() => set(false)}>
          <box-icon type="solid" name="x-square" size="3.4em"></box-icon>
        </span>
        <form id="postform" action="#">
          <h2>Add new post:</h2>
          <div className="inputbox">
            <input type="text" required />
            <label for="title">Title</label>
          </div>
          <div className="textbox">
            <label for="description">Description:</label>
            <textarea id="myTextArea" required></textarea>
          </div>
          <div id="buttonbox">
            <button onClick={() => set(false)}>Close</button>
            <button onClick={addPost}>Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
