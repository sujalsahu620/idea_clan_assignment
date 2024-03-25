
## Social Media App Backend

<a href='https://idea-clan-assignment-eight.vercel.app/'>Backend Deployed Link</a>
<hr/>
<a href='https://github.com/sujalsahu620/idea_clan_assignment'>Backend Repo Link</a>





<h2>User Account Creation and Authentication:</h2>
<ul>
  <li>Users can create accounts by providing essential information like username, email, and password.
</li>
   <li>Express.js handles user authentication routes, ensuring secure storage of user credentials.
</li>
   <li>Passwords are Encrypted to protect user data.
</li>
<li>Users are by default logged in when they signup</li>
</ul>

<h2>Post Creation:</h2>
<ul>
  <li>Registered users can create  text Posts .
</li>
   <li>Upon creation, posts are stored in MongoDB, allowing for efficient retrieval and management.
</li>
  <li>Post can be deleted by the respective creator If they are logged in</li>
</ul>

<h2>Viewing Other Users' Posts:</h2>
<ul>
  <li>Users can browse through posts created by other users.
</li>
   <li>GraphQL queries are utilized to retrieve posts from the database, providing a flexible and efficient means of data retrieval.
</li>
</ul>

<h2>Commenting on Posts:</h2>
<ul>
  <li>Users can add comments to posts created by themselves or other users.
</li>
   <li>Comments are associated with specific posts and stored in the database alongside post data.
</li>
    <li>Comments can be deleted by the respective creator If they are logged in</li>
</ul>

<h2>Liking Posts:</h2>
<ul>
  <li>Users have the option to like posts created by other users.
</li>
   <li>Likes are stored as part of the post data, allowing users to view the total number of likes on a particular post.
</li>
   <li>These functionalities are implemented using a combination of Express.js for route handling, MongoDB for data storage, and GraphQL for efficient querying and manipulation of data. The backend architecture ensures data security, scalability, and performance to provide a seamless social media experience for users.</li>
    <li>Likes can be deleted by the respective creator If they are logged in</li>
</ul>


### **To Signup**

- Query


```
mutation Mutation($registerInput: RegisterInput) {
  register(registerInput: $registerInput) {
    id
    email
    token
    username
    createdAt
  }
}
```
- Variables

```
{
  "registerInput": {
    "confirmPassword": "12345678",
    "email": "sujal@gmail.com",
    "password":  "12345678",
    "username": "sujal"
  }
}
```

- Response
```
{
    "data": {
        "register": {
            "id": "6601366f0d67200008402350",
            "email": "sujal@gmail.com",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDEzNjZmMGQ2NzIwMDAwODQwMjM1MCIsImVtYWlsIjoic3VqYWxzYWh1QGhvdG1haWwuY29tIiwidXNlcm5hbWUiOiJzYWh1amkiLCJpYXQiOjE3MTEzNTU1MDMsImV4cCI6MTcxMTM1OTEwM30.iLbZgvv4w4cJpjXuOURoG9IkYgJWkvs3r0oiLmKVQ1w",
            "username": "sujal",
            "createdAt": "2024-03-25T08:31:43.363Z"
        }
    }
}
```

### **To Login**

- Query
```
mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    email
    token
    username
    createdAt
  }
}
```
- Variables
```
{
  "username": "sujal",
  "password": "12345678"
}
```
- Response
```
{
  "data": {
    "login": {
      "id": "66010f04f21a4e55120605ca",
      "email": "sujal@gmail.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDEwZjA0ZjIxYTRlNTUxMjA2MDVjYSIsImVtYWlsIjoic3VqYWxAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzdWphbCIsImlhdCI6MTcxMTM2Mjg1OCwiZXhwIjoxNzExMzY2NDU4fQ.BahR4hLJOHqz9tsCCriXmv1NIN_Mt09PD1W64wRK1iA",
      "username": "sujal",
      "createdAt": "2024-03-25T05:43:32.592Z"
    }
  }
}
```

### **Create Post**
- Query

```
mutation CreatePost($body: String!) {
  createPost(body: $body) {
    createdAt
    likeCount
    commentCount
  }
}
```

- Variables
```
{
  "body": "Test Post"
}
```

- Response
```
{
  "data": {
    "createPost": {
      "createdAt": "2024-03-25T10:57:13.360Z",
      "likeCount": 0,
      "commentCount": 0
    }
  }
}
```

### **Add Comment to Post**
- Query
```
mutation CreatePost($postId: String!, $body: String!) {
  createComment(postId: $postId, body: $body) {
    commentCount
    comments {
      body
      createdAt
      id
      username
    }
    createdAt
    username
    body
  }
}
```

- Variables
```
{
  "body": "1st Comment ",
  "postId": "66011e0962fbf27d5ff0f3d8"
}
```

- Response
```
{
  "data": {
    "createComment": {
      "commentCount": 1,
      "comments": [
        {
          "body": "1st Comment ",
          "createdAt": "2024-03-25T10:59:11.237Z",
          "id": "660158ffed7e1a325c7f3b30",
          "username": "sujal"
        }
      ],
      "createdAt": "2024-03-25T06:47:37.583Z",
      "username": "riya",
      "body": "how are you"
    }
  }
}
```


### **Add Like to Post**
- Query
```
mutation CreatePost($postId: ID!) {
  likePost(postId: $postId) {
    likeCount
    likes {
      id
      createdAt
      username
    }
  }
}
```

- Variables
```
{
  "postId": "66011e0962fbf27d5ff0f3d8"
}

```

- Response
```
{
  "data": {
    "likePost": {
      "likeCount": 2,
      "likes": [
        {
          "id": "66011e1062fbf27d5ff0f3db",
          "createdAt": "2024-03-25T06:47:44.249Z",
          "username": "riya"
        },
        {
          "id": "660159a1ed7e1a325c7f3b31",
          "createdAt": "2024-03-25T11:01:53.684Z",
          "username": "sujal"
        }
      ]
    }
  }
}
```


### **Get Single  Post**
- Query
```
query GetPost($postId: ID!) {
  getPost(postId: $postId) {
    id
    body
    createdAt
    username
    comments {
      id
      createdAt
      username
      body
    }
    likes {
      id
      createdAt
      username
    }
    likeCount
    commentCount
  }
}
```

- Variables
```
{
  "postId": "6601586ced7e1a325c7f3b2e"
}
```

- Response
```
{
  "data": {
    "getPost": {
      "id": "6601586ced7e1a325c7f3b2e",
      "body": "Test Post",
      "createdAt": "2024-03-25T10:56:44.509Z",
      "username": "sujal",
      "comments": [
        {
          "id": "66015c662ebc8b00084739b5",
          "createdAt": "2024-03-25T11:13:42.191Z",
          "username": "sujal",
          "body": "how are you doing"
        }
      ],
      "likes": [
        {
          "id": "66015c6e2ebc8b00084739b6",
          "createdAt": "2024-03-25T11:13:50.774Z",
          "username": "sujal"
        }
      ],
      "likeCount": 1,
      "commentCount": 1
    }
  }
}

```



### **Get all Post with comment and Likes**

- Query
```
query Query {
  getPosts {
    id
    body
    createdAt
    username
    likes {
      id
      createdAt
      username
    }
    likeCount
    commentCount
    comments {
      id
      createdAt
      username
      body
    }
  }
}
```

- Response

```
{
  "data": {
    "getPosts": [
      {
        "id": "66014e5ed9b1fc0008f0ef6c",
        "body": "sujal sahu is my friend",
        "createdAt": "2024-03-25T10:13:50.564Z",
        "username": "user",
        "likes": [],
        "likeCount": 0,
        "commentCount": 0,
        "comments": []
      },
      {
        "id": "66011eb162fbf27d5ff0f3dd",
        "body": "sujla's first post",
        "createdAt": "2024-03-25T06:50:25.645Z",
        "username": "sujal",
        "likes": [
          {
            "id": "660137660d67200008402351",
            "createdAt": "2024-03-25T08:35:50.108Z",
            "username": "sujal"
          }
        ],
        "likeCount": 1,
        "commentCount": 0,
        "comments": []
      },
      {
        "id": "66011e0962fbf27d5ff0f3d8",
        "body": "how are you",
        "createdAt": "2024-03-25T06:47:37.583Z",
        "username": "riya",
        "likes": [
          {
            "id": "66011e1062fbf27d5ff0f3db",
            "createdAt": "2024-03-25T06:47:44.249Z",
            "username": "riya"
          }
        ],
        "likeCount": 1,
        "commentCount": 0,
        "comments": []
      }
    ]
  }
}
```


### **Delete Post**
- Query
```
mutation Mutation($postId: ID!) {
  deletePost(postId: $postId)
}

```

- Variables
```
{
  "postId": "6601581ced7e1a325c7f3b2d"
}
```

- Response
```
{
  "data": {
    "deletePost": "Post deleted successfully"
  }
}
```


### **Delete Comment**
- Query
```
mutation DeleteComment($postId: ID!, $commentId: ID!) {
  deleteComment(postId: $postId, commentId: $commentId) {
    comments {
      id
      createdAt
      username
      body
    }
    commentCount
    body
  }
}
```

- Variables
```
{
  "postId": "6601586ced7e1a325c7f3b2e",
  "commentId": "66015c702ebc8b00084739b7"
}

```

- Response
```
{
  "data": {
    "deleteComment": {
      "comments": [
        {
          "id": "66015c662ebc8b00084739b5",
          "createdAt": "2024-03-25T11:13:42.191Z",
          "username": "sujal",
          "body": "how are you doing"
        }
      ],
      "commentCount": 1,
      "body": "Test Post"
    }
  }
}
```


### **Created By Sujal Sahu**
<a href='https://www.linkedin.com/in/sujalsahu620/'>Linkedin</a>
<a href='https://sujalsahu620.github.io/'>Portfolio</a>
<a href='sujalsahu620'>GitHub</a>


