// REACT
var React = require('react');
var ReactDOM = require('react-dom');

// UTILITY
var ApiUtil = require('./util/ApiUtil'); // take out later
var SnippetStore = require('./stores/snippetStore');
// var UserStore = require('./stores/userStore');
// var AnnotationStore = require('./stores/annotationStore');
// var SnippetCommentStore = require('./stores/snippetCommentStore');
// var AnnotationCommentStore = require('./stores/annotationCommentStore');
// var AnnotationCommentStore = require('./stores/annotationCommentStore');

// COMPONENTS
// var Search = require('./components/Search.jsx');
var Index = require('./components/index.jsx');
var Popular = require('./components/index/popular.jsx');




$(function(){
  ReactDOM.render(
    <div>
      <Popular />
    </div>,
    document.getElementById('root')
  );
});
