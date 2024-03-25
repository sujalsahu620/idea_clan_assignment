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
