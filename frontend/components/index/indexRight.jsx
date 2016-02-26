var React = require('react');

var IndexRight = React.createClass({
  text: function() {
    return(
      <article className="index-text">
        <div>
          codeGenius is dedicated to crowd-sourced annotations of code snippets, 
          ranging from algorithm implementations to entire app source codes. The 
          goal of codeGenius is to provide a resource to beginner programmers 
          that allows for a deeper understanding of code.
        </div>

        <div>
          Find out all the latest on&nbsp;
          <span className="link-box"><a href="https://github.com/timhwang21/codeGenius" className="body-link">
            Github
          </a></span>!
        </div>
      </article>
    );
  },

  render: function() {
    return(    
      <article className="col-right-pane">
        <header className="header-small">
          <p>About codeGenius</p>
        </header>

        <article className="popular-intro">
          <div className="popular-intro-img noselect">
            {"{}"}
          </div>

          {this.text()}

        </article>

        <header className="header-small">
          <p>Popular on codeGenius</p>
        </header>
        <ul className="popular-list">
          {this.props.popularWide}
          {this.props.popularList}
          {this.props.popularSmallList}
        </ul>
      </article>
    );
  }
});

module.exports = IndexRight;