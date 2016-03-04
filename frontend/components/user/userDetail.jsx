var React = require('react');

var UserStore = require('../../stores/userStore');
var ApiUtil = require('../../util/ApiUtil');

var UserDetail = React.createClass({

  contextTypes: {
    router: React.PropTypes.object,
    currentUser: React.PropTypes.object,
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

  createEditButton: function() {
    if (this.context.currentUser.id === parseInt(this.props.params.userId)) {
      return (
        <div className="button-row" onClick={this.doNothing}>
          <button 
            className="square-button"
            onClick={this.handleEdit} >
            Edit
          </button>
        </div>
      );
    }
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
            <div className="user-body">
              {this.state.user.body}
            </div>
            
            {this.createEditButton()}

          </article>

          <article className="user-col-right-pane">
            Hello world

          </article>
        </div>
      </section>
    );
  }

});

module.exports = UserDetail;