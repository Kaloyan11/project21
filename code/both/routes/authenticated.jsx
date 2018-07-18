const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
});

authenticatedRoutes.route( '/home', {
  name: 'home',
  action() {
    ReactLayout.render( App, { yield: <Home /> } );
  }
});

authenticatedRoutes.route( '/invitations', {
  name: 'invites',
  action() {
    ReactLayout.render( App, { yield: <InvitesList /> } );
  }
});
