var React = require('react');
var Link = require('react-router').Link;

var UserStore = require('../../stores/userStore');
var ApiUtil = require('../../util/ApiUtil');
var TabMaker = require('./tabMaker');

var UserDetail = React.createClass({

  contextTypes: {
    router: React.PropTypes.object,
    currentUser: React.PropTypes.object,
  },

  childContextTypes: {
    body: React.PropTypes.string
  },

  getChildContext: function() {
    return {
      body: this.state.user.body
    };
  },

  getInitialState: function() {
    var id = parseInt(this.props.params.userId);
    return ({
      user: UserStore.find(id) || {}
    });
  },

  componentDidMount: function() {
    var id = parseInt(this.props.params.userId);
    this.changeToken = UserStore.addListener(this._onChange);
    ApiUtil.fetchSingleUser(id);
  },

  componentWillUnmount: function() {
    this.changeToken.remove();
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchSingleUser(newProps.params.userId);
  },

  _onChange: function() {
    var id = parseInt(this.props.params.userId);
    this.setState({user: UserStore.find(id)});
  },

  imgUrl: function() {
    var user = this.state.user;
    if (typeof user.image_url !== 'undefined') {
      return "/assets/" + this.state.user.image_url;
    } else {
      return "/assets/no_image";
    }
  },

  // right component

  numSnippets: function() {
    return this.state.user.snippets ? this.state.user.snippets.length : 0;
  },

  numAnnotations: function() {
    return this.state.user.annotations ? this.state.user.annotations.length : 0;
  },


  render: function() {
    return(
      <section className="user-index">
        <div className="user-wrapper">
          <article className="user-col-left-pane">
            <img
              className="user-profile-img"
              src={this.imgUrl()} />

            <header className="user-header-large">
              {this.state.user.username}
            </header>

            <header className="user-header-medium">
              IQ
            </header>
            <div className="user-profile-iq yellow">
              {this.state.user.iq}
            </div>

            <header className="user-header-medium">
              {"About " + this.state.user.username}
            </header>
            
            {this.props.children}
            

          </article>

          <TabMaker user={this.state.user} />
        </div>
      </section>
    );
  }

});

module.exports = UserDetail;