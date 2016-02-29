// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
// var browserHistory = require('react-router').browserHistory;

// UTILITY
var ApiUtil = require('./util/ApiUtil'); // take out later
// var UserStore = require('./stores/userStore');
// var AnnotationStore = require('./stores/annotationStore');
// var SnippetCommentStore = require('./stores/snippetCommentStore');
// var AnnotationCommentStore = require('./stores/annotationCommentStore');
// var AnnotationCommentStore = require('./stores/annotationCommentStore');

// COMPONENTS
// var Search = require('./components/Search.jsx');
var App = require('./components/app.jsx');
var Index = require('./components/index/index.jsx');
var SnippetDetail = require('./components/snippet/snippetDetail.jsx');
var SnippetDetailRight = require('./components/snippet/snippetDetailRight.jsx');
var SnippetFormPage = require('./components/snippet/snippetFormPage.jsx');
var AnnotationDetail = require('./components/annotation/annotationDetail.jsx');
var AnnotationFormPage = require('./components/annotation/annotationFormPage.jsx');

// var Landing = require('./components/landing.jsx');
var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />

    <Route path="snippets/new" component={SnippetFormPage} />
    
    <Route path="snippets/:snippetId" component={SnippetDetail}>
      <IndexRoute component={SnippetDetailRight} />
      <Route path="annotations/new" component={AnnotationFormPage} />
      <Route path="annotations/:annotationId" component={AnnotationDetail} />
      <Route path="annotations/:annotationId/edit" component={AnnotationFormPage} />
    </Route>
    
    <Route path="snippets/:snippetId/edit" component={SnippetFormPage} />
  </Route>
  );

$(function(){
  ReactDOM.render(
    <Router history={hashHistory}>
      {routes}
    </Router>,
    document.getElementById('root')
  );
});

