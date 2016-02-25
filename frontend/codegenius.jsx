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
var App = require('./components/app.jsx');
var Index = require('./components/index/index.jsx');
// var SnippetDetail = require('./components/snippet/snippetDetail.jsx');

// var Landing = require('./components/landing.jsx');

var Test = require('./test.jsx');
var Test2 = require('./test2.jsx');

// how to get to test1 and test2?
var routes = (
  <Route path="/" component={App}>

    <IndexRoute component={Index}>
      <Route path="snippet/:snippetId" component={Test} />
    </IndexRoute>
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

