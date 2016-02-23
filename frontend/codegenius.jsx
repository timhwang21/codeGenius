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


var Test = require('./components/test.jsx');

$(function(){
  ReactDOM.render(
    <div>
      Hello world!
      <Test />
    </div>,
    document.getElementById('root')
  );
});
