(function() {
  'use strict';

  angular.module('api.users', [])
  .factory('Users', function() {
    var Users = {};
    var userList = [
      {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        location: 'New York',
        twitter: 'gijane'
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        location: 'New York',
        twitter: 'billybob'
      },
      {
        id: '3',
        name: 'Jim',
        role: 'Developer',
        location: 'Chicago',
        twitter: 'jimbo'
      },
      {
        id: '4',
        name: 'Bill',
        role: 'Designer',
        location: 'LA',
        twitter: 'dabill'
      }
    ];
    Users.all = function() {
      return userList;
    };

    Users.findById = function(id) {
    var x; 
    for ( x = 0; x < userList.length; x++ )
   {
     if ( userList[x].id == id ){
       return userList[x];
       break; 
     }
   
   }
   return undefined;
}
    

    return Users;
  });
})();
