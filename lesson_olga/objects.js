var person = new Object();
person['name'] = 'Olia';
person['yearOfBirth'] =1988;
person.lastname = 'Ivanova';
console.log(person.age);

var getAge = function (obj) {
    var currentYear = new Date();
    currentYear = currentYear.getFullYear();
    return currentYear - obj['yearOfBirth'];
};

var getMethod = function (obj, str) {
    if (obj[str] != undefined  && typeof(obj[str]) !== 'function') {
        return false;
    } else {
        return true;
    }
};

var myObj = {
    'very long method name': function () {

    }
};