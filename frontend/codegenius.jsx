// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

// UTILITY
var ApiUtil = require('./util/ApiUtil'); // take out later
// var UserStore = require('./stores/userStore');
// var AnnotationStore = require('./stores/annotationStore');
// var SnippetCommentStore = require('./stores/snippetCommentStore');
// var AnnotationCommentStore = require('./stores/annotationCommentStore');
// var AnnotationCommentStore = require('./stores/annotationCommentStore');

// COMPONENTS
// var Search = require('./components/Search.jsx');
var Header = require('./components/header/header.jsx');
var Body = require('./components/body.jsx');
var Test = require('./test.jsx');

var routes = (
  <Route component={Body} path="/">
    <Route component={Test} path="new">
    </Route>
    <Route component={Test} path="new2">
    </Route>
  </Route>
  );

$(function(){
  ReactDOM.render(
    <Router>
      {routes}
    </Router>,
    document.getElementById('root')
  );
});
