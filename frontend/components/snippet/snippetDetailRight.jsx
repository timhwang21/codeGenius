var React = require('react');

var SnippetDetailRight = React.createClass({
  render: function() {
    var snippet = this.props.snippet;
    if (typeof snippet.image_url !== 'undefined') {
      var image_url = (
        snippet.image_url === "" ? 
        "/assets/" + snippet.language_id :
        snippet.image_url  
        // TODO: refactor to use Cloudinary
      );
    }

    return (
      <article className="snippet-col-right-pane">
        <div className="snippet-img-box">
          <img src={image_url} className="snippet-img" />
        </div>
        <div className="snippet-desc word-wrap">
          {snippet.desc}
        </div>
      </article>
    );
  }
});

module.exports = SnippetDetailRight;