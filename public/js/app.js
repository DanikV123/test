var UserModel = Backbone.Model.extend({
     idAttribute: '_id',

     urlRoot: function() {
        return '/user/'
    },

     validate: function (attr, options) {
      console.log('Validate');
     },

     parse: function(mod) {
       if(mod.dateOfBirth){

           mod.dateOfBirth = new Date();
           mod.dateOfBirth = moment( mod.dateOfBirth);
           mod.age = mod.dateOfBirth.fromNow(true);
           mod.dateOfBirth = mod.dateOfBirth.format('DD MMM, YYYY');
       };

       return mod;
  }
});
var userObject = {
    _id         : 1,
    firstName   : 'Danyil',
    lastName    : 'Vaida',
    dateOfBirth : new Date('2002-06-12')
};

var user;
var users = [];

for(var i = 0 ; i < 10; i++) {
    userObject._id = i + 1;
    userObject.dateOfBirth = new Date();
    user = new UserModel();
    users.push(user);                               //добавляем user в users
}

var Users = Backbone.Collection.extend({
    model: UserModel,
    url: '/user'
});

var _users = new Users(users);

/*
user.set('age', 23);    //добавляем в user(наше body) age со значением 23

console.log(user.get('name'));   //выписываем name из user(наше body)
console.dir(user.toJSON());      //выписываем весь user(наше body) как обьект
console.log(user);
*/