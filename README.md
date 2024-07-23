
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
}
```
