let administrators = [
  {
    name: { first: 'Kaloyan', last: 'VIP' },
    email: 'hld_admin_kl@yahoo.com',
    password: 'grupaproekt123'
  },
  {
    name: { first: 'Nikolay', last: 'VIP' },
    email: 'hld_admin_nk@yahoo.com',
    password: 'grupaproekt1'
  },

  {
    name: { first: 'Viewer', last: 'VIP' },
    email: 'hld_admin_vw@yahoo.com',
    password: 'grupaproekt!'
  }
];

let generateAccounts = () => {
  let usersExist = _checkIfAccountsExist( administrators.length );

  if ( usersExist ) {
    _createUsers( administrators );
  }
};

let _checkIfAccountsExist = ( count ) => {
  let userCount = Meteor.users.find().count();
  return userCount < count ? false : true;
};

let _createUsers = ( users ) => {
  for ( let i = 0; i < users.length; i++ ) {
    let user       = users[ i ],
        userExists = _checkIfUserExists( user.email );

    if ( !userExists ) {
      _createUser( user );
    }
  }
};

let _checkIfUserExists = ( email ) => {
  return Meteor.users.findOne( { 'emails.address': email } );
};

let _createUser = ( user ) => {
  let userId = Accounts.createUser({
    email: user.email,
    password: user.password,
    profile: {
      name: user.name
    }
  });

  Roles.addUsersToRoles( userId, 'admin' );
};

Modules.server.generateAccounts = generateAccounts;
