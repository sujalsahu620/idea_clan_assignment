<h1>Social Media App Backend</h1>

<h2>User Account Creation and Authentication:</h2>
<ul>
  <li>Users can create accounts by providing essential information like username, email, and password.
</li>
   <li>Express.js handles user authentication routes, ensuring secure storage of user credentials.
</li>
   <li>Passwords are securely hashed using bcrypt to protect user data.
</li>
</ul>

<h2>Post Creation:</h2>
<ul>
  <li>Registered users can create posts, including text content and possibly media attachments.
</li>
   <li>Upon creation, posts are stored in MongoDB, allowing for efficient retrieval and management.
</li>
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
</ul>

<h2>Liking Posts:</h2>
<ul>
  <li>Users have the option to like posts created by other users.
</li>
   <li>Likes are stored as part of the post data, allowing users to view the total number of likes on a particular post.
</li>
   <li>These functionalities are implemented using a combination of Express.js for route handling, MongoDB for data storage, and GraphQL for efficient querying and manipulation of data. The backend architecture ensures data security, scalability, and performance to provide a seamless social media experience for users.</li>
</ul>

### **To Signup**

<h3>Query</h3>
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
<h3>Variables</h3>
```
{
  "registerInput": {
    "confirmPassword": "12345678",
    "email": "sujalsahu@hotmail.com",
    "password":  "12345678",
    "username": "sahuji"
  }
}
```
- Response
```
{
    "data": {
        "register": {
            "id": "6601366f0d67200008402350",
            "email": "sujalsahu@hotmail.com",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDEzNjZmMGQ2NzIwMDAwODQwMjM1MCIsImVtYWlsIjoic3VqYWxzYWh1QGhvdG1haWwuY29tIiwidXNlcm5hbWUiOiJzYWh1amkiLCJpYXQiOjE3MTEzNTU1MDMsImV4cCI6MTcxMTM1OTEwM30.iLbZgvv4w4cJpjXuOURoG9IkYgJWkvs3r0oiLmKVQ1w",
            "username": "sahuji",
            "createdAt": "2024-03-25T08:31:43.363Z"
        }
    }
}
```

### **To Login**

```
mutation {
    register(input: {
        name: "abc",
        email: "example@gmail.com",
        password: "abc",
        role: "admin"
    }) {
        message
        success
    }
}
```






