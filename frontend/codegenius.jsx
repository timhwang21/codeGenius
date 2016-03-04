// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var IndexRedirect = require('react-router').IndexRedirect;
var hashHistory = require('react-router').hashHistory;
// var browserHistory = require('react-router').browserHistory;


// COMPONENTS
// var Search = require('./components/Search.jsx');
var App = require('./components/app');
var Main = require('./components/main');
var AuthPage = require('./components/auth/authPage');
var Index = require('./components/index/index');
var SnippetDetail = require('./components/snippet/snippetDetail');
var SnippetDetailRight = require('./components/snippet/snippetDetailRight');
var SnippetFormPage = require('./components/snippet/snippetFormPage');
var AnnotationDetail = require('./components/annotation/annotationDetail');
var AnnotationFormPage = require('./components/annotation/annotationFormPage');
var UserDetail = require('./components/user/userDetail');

// var requireLoggedIn = function(nextState, transition, callback) {
// } listen to sessionstore, see if anyone there, if not, transition to

var routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="main" />
    <Route path="auth" component={AuthPage} /> {/* eventually make this the index */}

    <Route path="main" component={Main}>
      <IndexRoute component={Index} />
      <Route path="snippets/new" component={SnippetFormPage} />
      <Route path="snippets/:snippetId" component={SnippetDetail}>
        <IndexRoute component={SnippetDetailRight} />
        <Route path="annotations/new/:lineIdx" component={AnnotationFormPage} />
        <Route path="annotations/:annotationId" component={AnnotationDetail} />
        <Route path="annotations/:annotationId/edit" component={AnnotationFormPage} />
      </Route>
      
      <Route path="snippets/:snippetId/edit" component={SnippetFormPage} />

      <Route path="users/:userId" component={UserDetail} />
    </Route>
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

