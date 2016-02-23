# Schema Information

## snippets
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
language_id | integer   | not null, foreign key (references languages), indexed
title       | string    | not null
image_url   | string    | 
body        | text      | not null
views       | integer   | not null

## snippet_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
snippet_id  | integer   | not null, foreign key (references snippets), indexed
body        | text      | not null 
upvotes     | integer   | not null 
downvotes   | integer   | not null 

## annotations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
snippet_id  | string    | not null, foreign key (references snippets), indexed
body        | datetime  | not null
start_idx   | integer   | not null
end_idx     | integer   | not null
upvotes     | integer   | not null 
downvotes   | integer   | not null 

## annotation_comments
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
author_id      | integer   | not null, foreign key (references users), indexed
annotation_id  | integer   | not null, foreign key (references annotations), indexed
body           | text      | not null 
upvotes        | integer   | not null 
downvotes      | integer   | not null 

## languages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## type_tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## type_taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
snippet_id  | integer   | not null, foreign key (references snippets), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
image_url       | string    | 
body            | text      | 
iq              | integer   | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique