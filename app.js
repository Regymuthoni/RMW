var person = {firstname:"<b>Regina</b>", lastname:"<b>Muthoni</b>",age:18,gender:"<b>female</b>"};

//console.log(person)
//document.write(person.firstname);
//document.write(person.age);
//document.write(person.gender);
//document.write(person.secondname);
//$(document).ready(function(){//we used it when we want our code to excute after the body

//})

$('.person').append('<p>First Name: ' + person.firstname +'</p>');
$('.person').append('<p>Last Name: ' + person.lastname+'</p>');
$('.person').append('<p> Gender: ' + person.gender+'</p>');
$('.person').append('<p> Age: ' + person.age+'</p>');
