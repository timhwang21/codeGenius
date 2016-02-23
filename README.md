# codeGenius

![Logo][logo]

[logo]: ./docs/images/codegenius-logo.png

Heroku link -- *not yet available*

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

codeGenius is a code annotation web application inspired by Rapgenius. The backend is build in Ruby on Rails, while the frontend utilizes React. Planned features for codeGenius include:

- [ ] Sign up / sign in functionality
- [ ] CRUD functionality for code snippets
- [ ] CRUD functionality for inline annotations
- [ ] CRUD functionality for comments
- [ ] Vote system for annotations, affecting display order
- [ ] Organization by language and problem type (search, sort, recursion, etc.)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### [Phase 1][phase-one]: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

**Finish by:** 2/22/16 midday

- [ ] create `User` model
- [ ] authentication
- [ ] blank index page after signin
- [ ] user signup/signin pages with rudimentary styling
- [ ] blank landing page at root

### [Phase 2][phase-two-three]: Model, API, and basic APIUtil for snippets and comments (1.5 days)

**Objective:** Snippets can be created, read, edited and destroyed through
the API.

**Finish by:** 2/23/16 end

- [ ] create `Snippet` model
- [ ] CRUD API for snippets (`SnippetsController`)
- [ ] create `SnippetComment` model
- [ ] CRUD API for snippet comments (`SnippetCommentsController`)
- [ ] Create `Language` model (read-only)
- [ ] create seed data for snippets and comments
- [ ] jBuilder views for snippets and snippet comments -- comments nested within snippets
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### [Phase 3][phase-two-three]: Flux Architecture and Router (1 days)

**Objective:** Snippets and snippet comments can be created, read, edited and destroyed with the
user interface.

**Finish by:** 2/24/16 end 

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- [ ] implement each snippet component, building out the flux loop as needed.
  - [ ] `SnippetsIndex`
  - [ ] `SnippetIndexItem`
  - [ ] `CommentsIndex`
  - [ ] `CommentIndexItem`
  - [ ] `CommentForm`
  - [ ] `SnippetForm` (possibly a separate page)

### [Phase 4][phase-four]: Start Styling (0.5 days)

**Finish by:** 2/25/16 midday

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] position elements on the page
- [ ] create a basic style guide
  - [ ] sitewide colors
  - [ ] sitewide interactive elements (buttons)
- [ ] add basic colors & styles
- [ ] beautify index page, sign in, sign up
- [ ] implement syntax highlighting

### [Phase 5][phase-five]: Annotations and annotation comments (1.5 day)

**Finish by:** 2/26/16 end

**Objective:** Annotations can be created, read, edited and destroyed through
the API.

- [ ] create `Annotations` model
  - [ ] nested under `Snippets`
- build out API, Flux loop, and components for:
  - [ ] Annotation CRUD
  - [ ] annotating requires a snippet
  - [ ] viewing notes by notebook
- [ ] annotation functionality includes:
  - [ ] inline annotations
  - [ ] annotation comments
- Use CSS to style new views

### Phase 6: Tags (1 day)

**Finish by:** 2/27/16 end

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for snippet
  - [ ] adding tags to snippet
  - [ ] creating tags while adding to snippets
  - [ ] searching snippets by tag
- [ ] Style new elements

### Flex Day: 2/28/16 reschedule, catch up, replan

### Phase 7: Users Pt. II (1 day)

**Finish by:** 2/29/16 end

**Objective: User profile pages show uploaded snippets and annotations

- [ ] create user profile pages
- [ ] tabs display user information
  - [ ] annotations, pages annotated, files uploaded

### Phase 8: Vote system (1.5 days)

**Finish by:** 3/2/16 midday

- [ ] create upvote and downvote functionality
  - [ ] portable across snippet comments, annotations, and annotation comments
- [ ] elements reorganize based on votes
  - [ ] comments arranged in order of vote
  - [ ] only top voted annotation is displayed
  - [ ] comments under -2 votes are hidden
- [ ] User profile page shows sum of votes as "IQ"

### Phase 9: Flesh out content (0.5 days)

**Finish by:** 3/2/16 end

**Objective:** Add style guidelines, navigation aids, user profile page

- [ ] add basic functionality to user profile pages
- [ ] add to website content
- [ ] ask classmates to beta test

### Phase 8: Styling Cleanup and Seeding (1 day)

**Finish by:** 3/3/16 end

**Objective:** Make the site feel more cohesive and awesome.

- [ ] get feedback on my UI from others
- [ ] refactor HTML classes & CSS rules
- [ ] add modals, transitions, and other styling flourishes.
- [ ] add splash page code rain animation

### Phase 9: Bonus Features (TBD)
- [ ] add sharing system (`Share` model and join table for users)
- [ ] add "suggest improvements" to annotations
- [ ] add edit history for annotations
- [ ] increase types of files users can upload (embedded videos, etc.)
- [ ] infinite scrolling for snippet comments (not annotation comments)
- [ ] changelogs for Notes
- [ ] new user walkthrough

[phase-one]: ./docs/phases/phase1.md
[phase-two-three]: ./docs/phases/phase2-3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
