import React, { useState } from "react";
import "../styles/App.css";
import Navigation from "./Navigation";
import Posts from "./Posts";
const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [page, setPage] = useState(false);
  const [posts, setPosts] = useState([
    {
      postedBy: "Kunal",
      title: "Random post",
      postText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      upVotes: 3,
      downVotes: 1
    },
    {
      postedBy: "Kunal",
      title: "Random post",
      postText:
        "Lorem Ipsum is simply dummy text of the printing and zxzjjy asdhbb asdbjhbajhbkubas khbkubasx typesetting industrydscbsjdbjsbcsdcbsdjcbkjbsdkj cnlskdcnlksdcnsdklnm.",
      upVotes: 3,
      downVotes: 1
    }
  ]);
  return (
    <div id="main">
      <Navigation
        log={isLogged}
        set={setIsLogged}
        setpost={setPosts}
        data={posts}
        page={page}
        setPage={setPage}
      />
      <Posts data={posts} set={setPosts} log={isLogged} setPage={setPage} />
    </div>
  );
};

export default App;
