var React = require('react');
var Link = require('react-router').Link;

var headerLogo = "/assets/codegenius-logo-small";

var SessionStore = require('../../stores/sessionStore');
var HeaderActionsNoUser = require('./headerActionsNoUser');
var HeaderActionsUser = require('./headerActionsUser');
var SearchBar = require('./search/searchBar');

var SnippetStore = require('../../stores/snippetStore.js');
var ApiUtil = require('../../util/ApiUtil.js');

var SNIPPETS = [
  {title: 'timBsearch'},
  {title: 'traveling_salesman'},
  {title: 'myCurry'},
  {title: 'binarysearch'},
  {title: 'mergesort'}
];

var HeaderPrimary = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    currentUser: React.PropTypes.object,
    loggedIn: React.PropTypes.bool,
    handleLogOut: React.PropTypes.func,
    redirectToAuth: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      searchbarStyle: {width: "16%"},
      otherStyle: {display: "flex"},
      snippets: SnippetStore.all() ? SnippetStore.all() : []
    }
  },

  componentDidMount: function() {
    this.snippetChangeToken = SnippetStore.addListener(this._onSnippetChange);
    ApiUtil.fetchAllSnippets();
  },

  componentWillUnmount: function() {
    this.snippetChangeToken.remove();
  },

  _onSnippetChange: function() {
    this.setState({snippets: SnippetStore.all()});
  },

  handleFocusSearchbar: function() {
    this.setState({
      searchbarStyle: {
        background: "#39382F",
        width: "100%",
        fontSize: "20px",
      },
      otherStyle: {display: "none"},
    });
  },

  handleBlurSearchbar: function() {
    this.setState({
      searchbarStyle: {
        background: "#1D1E19",
        borderBottom: "1px solid #39382F",
        width: "16%",
        fontSize: "16px"
      },
      otherStyle: {display: "flex"},
    });
  },

  headerActions: function() {
    if (this.context.loggedIn) {
      return <HeaderActionsUser />;
    } else {
      return <HeaderActionsNoUser />;
    }
  },

  render: function() {
    // debugger;
    return(
      <div className="header-primary">
        <div 
          className="header-searchbar" 
          ref="searchbar"
          style={this.state.searchbarStyle}
          onFocus={this.handleFocusSearchbar}
          onBlur={this.handleBlurSearchbar} >
          <SearchBar snippets={this.state.snippets}/>
        </div>

        <div className="header-logo noselect" style={this.state.otherStyle}>
          <Link to="main/">
            <img src={headerLogo} height="38" width="202" />
          </Link>
        </div>

        <div className="header-actions-container" style={this.state.otherStyle}>
          {this.headerActions()}
        </div>

      </div>
    );
  }
});

module.exports = HeaderPrimary;