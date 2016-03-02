QUESTIONS

left off on: annotation form, trying to fetch title. Passed as query string; is there a better way?


TODO

Users - pass in current user information
Search
Navbar (searchbar) + dropdowns
session controller - @current_user
  session json view - pull attributes of @current_user out, e.g. session_token
  session store - pulls out session_token


Dropdowns

BONUS
- requiring vendor js (highlight.js)
- update react router to not use history mixin?
- embedding js in react views?
  * Try making whole thing a component and embed in view?
  * add script tag to Layout  

- "pass" login information to frontend using application.html.erb

TODO
- cloning components for sibling routes in SnippetDetail

var routes = (
  // <Route path="/" component={App}>
    // <IndexRoute component={Index} />
    // <Route path="snippets/:snippetId" component={SnippetDetail} />
      ADD: <IndexRoute component={SnippetDetailDesc} /> 
      ADD: <Route path="annotate/:annotationId" component={AnnotationDetail} />
      ADD: <Route path="annotate/new" component={AnnotationForm} />
    // <Route path="snippets/new" component={SnippetFormPage} />
    // <Route path="snippets/:snippetId/edit" component={SnippetFormPage} />
  // </Route>
  );

FINAL
var routes = (
  <Route component={App} path="/">
    <IndexRoute component={Landing} />
     
     <Route component={Login} path="login">
       <Route component={Signin} path="/signin" />
       <Route component={Signup} path="/signup" />
     </Route>

    <Route component={Body} path="body" >
      <Route component={LanguageMenu} path="languages" />
      <Route component={TypeMenu} path="types" />
      <Route component={AddSnippet} path="new" />
      <Route component={About} path="about" />
    </Route>

    <Route component={SnippetDetail} path="snippet/snippetId">
      <IndexRoute component={SnippetDetail} />
      <Route component={Annotation} path="annotation/annotationId" />
    </Route>

    <Route component={UserProfile} path="user/userId">
    </Route>
  </Route>  
);



annotations

CHALLENGES

1. On select
  Use DOM to select if on select is deprec
  Alternative: select by lines


2. Annotation needs:
- line number
- body
- fkey

3. Rendering
- split by /n
- add an onclick for annotated lines

