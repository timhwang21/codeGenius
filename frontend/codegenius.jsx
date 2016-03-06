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
var UserBody = require('./components/user/userBody');
var UserBodyForm = require('./components/user/userBodyForm');


// var requireLoggedIn = function(nextState, transition, callback) {
// } listen to sessionstore, see if anyone there, if not, transition to

function requireAuth(nextState, replace) {
  if (!localStorage.currentUser) {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireLoggedOut(nextState, replace) {
  if (localStorage.currentUser) {
    replace({
      pathname: '/main',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

var routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="auth" />
    <Route path="auth" component={AuthPage} onEnter={requireLoggedOut} /> 

    <Route path="main" component={Main}>
      <IndexRoute component={Index} />
      <Route path="snippets/new" component={SnippetFormPage} onEnter={requireAuth} />
      <Route path="snippets/:snippetId" component={SnippetDetail}>
        <IndexRoute component={SnippetDetailRight} />
        <Route path="annotations/new/:lineIdx" component={AnnotationFormPage} onEnter={requireAuth} />
        <Route path="annotations/:annotationId" component={AnnotationDetail} />
        <Route path="annotations/:annotationId/edit" component={AnnotationFormPage} onEnter={requireAuth}/>
      </Route>
      
      <Route path="snippets/:snippetId/edit" component={SnippetFormPage} onEnter={requireAuth}/>

      <Route path="user/:userId" component={UserDetail}>
        <IndexRoute component={UserBody} />
        <Route path="edit" component={UserBodyForm} onEnter={requireAuth}/>
      </Route>
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

