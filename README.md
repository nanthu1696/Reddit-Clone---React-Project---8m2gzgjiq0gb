**Project Overview**

- This project is not an exact reddit clone, but this have some features of the reddit like adding a post and upvoting, downvoting the post.
- I have used concepts of HTML, CSS and React to create this web application.
- Major concepts of React used in this application are Uplifting the states, useState hook 



**Features**
- **Homepage**
    - Created the homepage which displays recent posts from the users. All of them are fake data's.
    - Those data's are stored in the local storage in the format given below
    
    ```jsx
    const posts = [
        {
            postedBy: "Kunal",
            postText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            upVotes:3,
    		downVotes:1
        },
    ];
    ```
    
    - If the user is not logged, he can't be able to upvote or downvote a post.
- **Login Functionality**
    - Added the login feature to the App (for development purpose I have added a predefined list of usernames and passwords). For ex: {username: admin, password: admin123}
    - If the user is logged in he should be able to upvote and downvote a post and also have the option to add a new post.
- **Adding a new post**
    - A logged in user can be able to add a new post.
    - A new post contains a title and description.
    - All the new posts data are stored in local Storage.
    - User can able to upvote and downvote existing posts on the home page.
- **Adding upvotes and downvotes to a post**
    - Every Post has the feature of upvotes and downvotes which can be clicked by a user only once.
