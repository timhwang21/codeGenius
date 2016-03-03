// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
// var browserHistory = require('react-router').browserHistory;


// COMPONENTS
// var Search = require('./components/Search.jsx');
var App = require('./components/app');
var AuthPage = require('./components/auth/authPage');
var Index = require('./components/index/index');
var SnippetDetail = require('./components/snippet/snippetDetail');
var SnippetDetailRight = require('./components/snippet/snippetDetailRight');
var SnippetFormPage = require('./components/snippet/snippetFormPage');
var AnnotationDetail = require('./components/annotation/annotationDetail');
var AnnotationFormPage = require('./components/annotation/annotationFormPage');

// var Landing = require('./components/landing.jsx');
var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />

    <Route path="auth" component={AuthPage} /> {/* eventually make this the index */}

    <Route path="snippets/new" component={SnippetFormPage} />
    
    <Route path="snippets/:snippetId" component={SnippetDetail}>
      <IndexRoute component={SnippetDetailRight} />
      <Route path="annotations/new/:lineIdx" component={AnnotationFormPage} />
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

