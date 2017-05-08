var UserModel = Backbone.Model.extend({
    idAttribute: 'age',
    urlRoot: function() {
        return '/user/'
    }

});

var user = new UserModel({
    name: {
        first: 'Ivan',
        last: 'Ivanov'
    },

    dateOfBirth: new Date('2002-06-12')
});

user.set('age', 23);

console.log(user.get('name'));
console.dir(user.toJSON());
console.log(user);