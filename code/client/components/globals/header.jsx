var bgColors = { "Default": "#81b71a",
  "Blue": "#5C83A8",
  "Cyan": "#37BC9B",
  "Green": "#8CC152",
  "Red": "#E9573F",
  "Yellow": "#F6BB42",
  "Gray": "#302E2D"
};
AppHeader = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    return {
      brandLink: !!Meteor.user() ? '/home' : '/'
    };
  },

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container" style={{backgroundColor: bgColors.Gray}}>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" style={{color: bgColors.Blue}}href={ this.data.brandLink }>Holdr</a>
          </div>
          { this.props.hasUser ? <AuthenticatedNavigation /> : <PublicNavigation /> }
        </div>
      </nav>
    );
  }
});
