// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

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
var Test2 = require('./test2.jsx');

var routes = (
  <Route component={Body} path="/">
    <IndexRoute component={Test}>
    </IndexRoute>
    <Route component={Test2} path="new2">
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

