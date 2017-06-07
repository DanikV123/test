var UserModel = Backbone.Model.extend({
    idAttribute: 'age',
    urlRoot: function() {
        return '/user/'
    }

});

var user = new UserModel({             //вручную создаем body(инфа, введенная пользователем)
    name: {
        first: 'Ivan',
        last: 'Ivanov'
    },

    dateOfBirth: new Date('2002-06-12')
});

user.set('age', 23);    //добавляем в user(наше body) age со значением 23

console.log(user.get('name'));   //выписываем name из user(наше body)
console.dir(user.toJSON());      //выписываем весь user(наше body) как обьект
console.log(user);
//changes//