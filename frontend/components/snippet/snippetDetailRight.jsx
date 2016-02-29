var React = require('react');

var SnippetDetailRight = React.createClass({
  contextTypes: {
    imgUrl: React.PropTypes.string,
    desc: React.PropTypes.string
  },

  render: function() {
    return (
      <article className="snippet-col-right-pane">
        <div className="snippet-img-box">
          <img src={this.context.imgUrl} className="snippet-img" />
        </div>
        <div className="snippet-desc word-wrap">
          {this.context.desc}
        </div>
      </article>
    );
  }
});

module.exports = SnippetDetailRight;