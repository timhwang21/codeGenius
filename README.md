codeGenius
=======

### [Live Link](http://code-geni.us/)

![Logo][logo]

**codeGenius** is a code annotation website dedicated to **crowd-sourced annotations of code snippets**, ranging from algorithm implementations to entire app source codes. The goal of codeGenius is to act as a resource for beginner programmers that allows for a deeper understanding of code. It is modeled after [Rap Genius](http://rap.genius.com/).

## Overview

codeGenius is a **full-stack web application** developed by [Timothy Hwang](https://www.github.com/timhwang21). The backend was created using **Ruby on Rails** and **PostgreSQL**, while the frontend is uses **React.JS** and **Flux**. Styling was done entirely by myself using **CSS3 / SCSS**.

## Features

### Login Page

codeGenius uses a hand-rolled authentication system. On the back end, passwords are hashed using **BCrypt**. User session tokens are sent to the front-end in order to allow for **single-page authentication**.

![Screenshot 1][screenshot1]

### Index Page

Code snippets are retrieved based on **popularity** (view count) and **recency**. View count is incremented using a custom route and controller method:

`get 'snippets/:id/add_view', as: 'snippet_add_view', to: 'snippets#add_view'`

    def add_view
      Snippet.increment_counter(:views, params[:id])
    end

![Screenshot 2][screenshot2]

### Snippets & Annotations

Users can view individual code snippets. Clicking on an annotated line reveals the annotation, while clicking on other lines opens a form to create a new annotation.

The annotation logic works as follows:

1. Annotations are stored with a line index.
2. When displaying a snippet, the snippet body is split by the newline character (`\n`). Then, the line index is used to match annotations with snippets.

![Screenshot 3][screenshot3]

Users can also create their own snippets. Layouts for edit forms are identical to those of show pages across the site to provide a seamless user experience. Cached data is also used in order to "optimistically" load pages, further increasing responsiveness.

![Screenshot 4][screenshot4]

### User Profile Page

Each user has a **profile page**, where authored snippets and annotations can be accessed. JSON views are nested to optimize database queries.

![Screenshot 5][screenshot5]

[logo]: ./app/assets/images/codegenius-logo.png
[screenshot1]: ./app/assets/images/screenshot1.png
[screenshot2]: ./app/assets/images/screenshot2.png
[screenshot3]: ./app/assets/images/screenshot3.png
[screenshot4]: ./app/assets/images/screenshot4.png
[screenshot5]: ./app/assets/images/screenshot5.png


