var names = [ 'Mike', 'Nancy', 'Kylie', 'Erin', 'Kevin'];

// names.forEach( function (name) {
//   console.log('forEach; ', name);
// });

// // arrow functions can replace any anonymous function definition.

// names.forEach( (name) => {
//   console.log('arrow func: ', name);
// });

// names.forEach( (name) => console.log('single line arrow func: ', name));

// var returnFam = (name) => name + ' Reed';
// names.forEach( (name) => console.log(returnFam(name)));


// var person = {
//   name: 'Santa',
//   greet: function () {
//     names.forEach( (name) => {
//       // this.name would not work if the function was 
//       // defined as an ordinary anonymous function "function (name) {}"
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// person.greet();


// challenge
function add (a, b) {
  return a + b;
}
console.log('3 + 3 = ', add(3, 3));
console.log('11 + (-7) = ', add(11, -7));

// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log('3 + 3 = ', addStatement(3, 3));
console.log('11 + (-7) = ', addStatement(11, -7));

// addExpression
var addStatement = (a, b) => a + b;

console.log('3 + 3 = ', addStatement(3, 3));
console.log('11 + (-7) = ', addStatement(11, -7));
