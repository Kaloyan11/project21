Index = React.createClass({
  componentDidMount() {
    let refs = this.refs,
        form = React.findDOMNode( refs.requestForm );

    $( form ).validate({
      rules: {
        emailAddress: { required: true, email: true }
      },
      submitHandler() {
        let email = React.findDOMNode( refs.emailAddress );

        Meteor.call( 'addToInvitesList', email.value, ( error ) => {
          if ( error ) {
            alert( error.reason );
          } else {
            email.value = "";
            alert( 'An invitation is requested. Thanks for your interest' );
          }
        });
      }
    });
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    return <div classNameName="index">
      <PageHeader label="Apply for a user access to the Holdr app - just enter your e-mail to request an invitation" />

      <p>Holdr is an application that allows for secure communication and file transfer between clients and designers. It arranges files sent from clients to designers into folders.</p>
      <Form ref="requestForm" id="request-beta-invite" className="email-form" onSubmit={ this.handleSubmit }>
        <Input
          ref="emailAddress"
          type="email"
          name="emailAddress"
          className="form-control"
        />
      <Button type="submit" buttonStyle="success" label="Request Invitation" />
      </Form>
    </div>;

  }
});
