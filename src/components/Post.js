import React from "react";
import "boxicons";

const Post = (props) => {
  const { data } = props;
  return (
    <div className="singlepost">
      <div className="voteContainer">
        <div className="buttonContainer">
          <button>
            <box-icon type="solid" name="up-arrow"></box-icon>
          </button>
          <span>{data.upVotes}</span>
        </div>
        <div className="buttonContainer">
          <button>
            <box-icon type="solid" name="down-arrow"></box-icon>
          </button>
          <span>{data.downVotes}</span>
        </div>
      </div>
      <div className="postText">{data.postText}</div>
    </div>
  );
};

export default Post;
