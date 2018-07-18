FlowRouter.notFound = {
  action() {
    ReactLayout.render( App, { yield: <NotFound /> } );
  }
};

Accounts.onLogin( () => {
  let currentRoute = FlowRouter.current(),
      path         = currentRoute ? currentRoute.path : '/home';

  return path !== '/login' ? FlowRouter.go( path ) : FlowRouter.go( '/home' );
});
