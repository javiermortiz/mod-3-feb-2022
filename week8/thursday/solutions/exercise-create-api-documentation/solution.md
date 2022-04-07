# Exercise: API Endpoints Solution

- Get all the posts
  - `GET /posts`
- Create a new post
  - `POST /posts`
- Edit a post
  - `PUT /posts/:postId`
  - `PATCH /posts/:postId`
- Create a new user
  - `POST /users`
- Get the comments for a post
  - `GET /posts/:postId/comments`
- Create a comment for a post
  - `POST /posts/:postId/comments`
- Edit a comment for a post
  - `PUT /comments/:commentId`
  - `PATCH /comments/:commentId`
- Delete a comment for a post
  - `DELETE /posts/:postId/comments/:commentId`
  - `DELETE /comments/:commentId`
- Add a like for a post
  - `POST /posts/:postId/like`
- Remove a like for a post
  - `DELETE /posts/:postId/like`
- Get all the posts of a user
  - `GET /users/:userId/posts`
- Submit a search on posts
  - `GET /posts/search`   query = cute puppies
  - `POST /posts/search`

cookie =  username: Jeffrey   userId: 1
`POST /posts`   {title: second post, body: this is better than last one}

Posts
id     title        userId  body
1       first post     1     this is my first post!
2       second post    1     this is better than last one

`POST /posts/:postId/comments`   {comment: "great post!"}
`DELETE /comments/:commentId`
Comments
id   comment       postId
1    great post!   1