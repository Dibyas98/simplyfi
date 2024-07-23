
# Project Title

This project is a Node.js application that uses MongoDB to manage articles, users, and notifications. It provides APIs for creating articles and users, liking and viewing articles, and sending notifications when an article is liked.

**Features**
- Create, read, update, and delete (CRUD) operations for articles and users.
- Track and cache the number of likes and views for articles.
- Send notifications to users when their articles are liked.
- Store and manage notifications in the database.
- Utilize Redis for caching popular articles' likes and views.
## API Reference
#### User Create 

```http
  POST /api/users
{
  "name": "User Name"
}

```
#### Post Article

```http
  POST /api/articles/:userId
  {
  "title": "Article Title",
  "body": "Article body content"
}
```
#### Update Like Count

```http
  POST /api/articles/:id/likes
  {
  "userId": "user_id"
}

```
#### Update View Count

```http
  POST /api/articles/:id/view
  {
  "userId": "user_id"
}
```
#### Notification List

```http
  get /api/notification/:userId
```

#### Notification read 

```http
  POST /api/notifiaction/:notifyId
```
