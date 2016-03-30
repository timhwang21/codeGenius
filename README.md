codeGenius
=======

### [Live Link](http://code-geni.us/)

![Logo][logo]

**codeGenius** is a code annotation website dedicated to **crowd-sourced annotations of code snippets**, ranging from algorithm implementations to entire app source codes. The goal of codeGenius is to act as a resource for beginner programmers that allows for a deeper understanding of code. It is modeled after [Rap Genius](http://rap.genius.com/).

## Overview

codeGenius is a **full-stack web application** developed by [Timothy Hwang](https://www.github.com/timhwang21). The backend was created using **Ruby on Rails** and **PostgreSQL**, while the frontend uses **React.JS** and **Flux**. Styling was done entirely by myself using **CSS3 / SCSS**.

## Features

### Login Page

codeGenius uses a hand-rolled authentication system. On the back end, passwords are hashed using **BCrypt**. User session tokens are sent to the front-end in order to allow for **single-page authentication**.

![Screenshot 1][screenshot1]

### Index Page

Code snippets are retrieved based on **popularity** (view count) and **recency**. View count is incremented by the controller:

    # snippets_controller.rb
    def add_view
      Snippet.increment_counter(:views, params[:id])
    end

    # routes.rb
    get 'snippets/:id/add_view', as: 'snippet_add_view', to: 'snippets#add_view'`

![Screenshot 2][screenshot1]

### Search

Search is implemented by checking if the search query is included within each snippet title.

    // resultTable.jsx
    this.props.snippets.forEach(function(snippet, i) {
      if (snippet.title.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0) {
        rows.push(
          // search result row component
        );
      }
    }.bind(this));

The searchbar submits an AJAX request for all the snippet titles upon loading. Because the searchbar is shared between components, no unnecessary loading occurrs.

![Screenshot 3][screenshot3]

### Snippets & Annotations

Users can view individual code snippets. Clicking on an annotated line reveals the annotation, while clicking on other lines opens a form to create a new annotation.

The annotation logic works as follows:

1. Annotations are stored with a line index.
2. When displaying a snippet, the snippet body is split by the newline character (`\n`). Then, the line index is used to match annotations with snippets.

![Screenshot 4][screenshot4]

Users can also create their own snippets and annotations. Layouts for edit forms are identical to those of show pages across the site to provide a seamless user experience. Cached data is also used in order to "optimistically" load pages, further increasing responsiveness.

![Screenshot 5][screenshot5]

Snippets can be downloaded from their pages. This is done by converting the snippet's title to one safe for filenames using regex, and using `send_data` to transmit the file.

    # snippet.rb
    def create_filename
      file_ext = {
        # hash containing appropriate file extensions
      }

      safe_title = title.gsub(/\s/, "_").gsub(/\..*/, "").gsub(/\W/, "")

      "#{safe_title}.#{file_ext[language_id]}"
    end

    # snippets_controller.rb
    def download
      snippet = Snippet.find(params[:id])
      send_data snippet.body, filename: snippet.create_filename
    end

    # routes.rb
    get 'snippets/:id/download', as: 'snippet_download', to: 'snippets#download'

![Screenshot 6][screenshot6]

![Screenshot 7][screenshot7]

### User Profile Page

Each user has a **profile page**, where authored snippets and annotations can be accessed. JSON views are nested to optimize database queries.

![Screenshot 8][screenshot8]

[logo]: ./app/assets/images/codegenius-logo.png
[screenshot1]: ./app/assets/images/screenshot1.png
[screenshot2]: ./app/assets/images/screenshot2.png
[screenshot3]: ./app/assets/images/screenshot3.png
[screenshot4]: ./app/assets/images/screenshot4.png
[screenshot5]: ./app/assets/images/screenshot5.png
[screenshot6]: ./app/assets/images/screenshot6.png
[screenshot7]: ./app/assets/images/screenshot7.png
[screenshot8]: ./app/assets/images/screenshot8.png

## Known Issues

1. CSS for snippet title field needs to be elongated.
2. Search bar only shows top ~20 results.

# Future Features

1. Add pagination to search results, or implement a dedicated search results page.
2. Allow for searching by author.
3. Make decision on how to handle snippet edits -- strict (Rapgenius style -- don't allow editing at all) or loose (delete all annotations upon snippet editing).
4. Pagination for user tab.