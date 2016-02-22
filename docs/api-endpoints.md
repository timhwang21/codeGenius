# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Snippets

- `GET /api/snippets`
- `POST /api/snippets`
- `GET /api/snippets/:id`
- `PATCH /api/snippets/:id`
- `DELETE /api/snippets/:id`

### Snippet_comments

- `GET /api/snippets/:id/comments`
- `POST /api/snippets/:id/comments`
- `GET /api/snippet_comments/:comment_id`
- `PATCH /api/snippet_comments/:comment_id`
- `DELETE /api/snippet_comments/:comment_id`

### Annotations

- `GET /api/snippets/:id/annotations`
- `POST /api/snippets/:id/annotations`
- `GET /api/annotations/:id`
- `PATCH /api/annotations/:id`
- `DELETE /api/annotations/:id`

### Annotation_comments

- `GET /api/annotations/:id/comments`
- `POST /api/annotations/:id/comments`
- `GET /api/annotation_comments/:comment_id`
- `PATCH /api/annotation_comments/:comment_id`
- `DELETE /api/annotation_comments/:comment_id`

### Tags

- A snippet's tags will be included in the snippet's show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/snippets/:note_id/tags`: add tag to snippet by name
  - if snippet doesn't already exist, it will be created
- `DELETE /api/snippets/:note_id/tags/:tag_name`: remove tag from snippet by
  name
