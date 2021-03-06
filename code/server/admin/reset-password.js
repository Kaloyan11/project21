Accounts.emailTemplates.resetPassword.siteName = () => "Holdr";
Accounts.emailTemplates.resetPassword.from     = () => "Holdr <admin@application.com>";
Accounts.emailTemplates.resetPassword.subject  = () => "[Holdr] Reset Your Password";

Accounts.emailTemplates.resetPassword.text = ( user, url ) => {
  let emailAddress   = user.emails[0].address,
      urlWithoutHash = url.replace( '#/', '' ),
      supportEmail   = "help-holdr@gmail.com",
      emailBody      = `A password reset has been requested for the account related to this address (${emailAddress}). To reset the password, visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this reset, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

  return emailBody;
};
