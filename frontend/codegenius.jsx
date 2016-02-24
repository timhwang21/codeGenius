// REACT
var React = require('react');
var ReactDOM = require('react-dom');

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
var Index = require('./components/index.jsx');

$(function(){
  ReactDOM.render(
    <div>
      <Header />
      <Index />
    </div>,
    document.getElementById('root')
  );
});
