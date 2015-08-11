// information from a database
var foods = [
  {name: 'Cheese', department: 'grocery', price: 10},
  {name: 'Duck fat', department: 'meat', price: 15},
  {name: 'Steak', department: 'meat', price: 12},
  {name: 'Fake Steak', department: 'vegetarian', price: 12},
  {name: 'Bleach', department: 'household', price: 12},
  {name: 'Blueberry pie', department: 'grocery', price: 9},
  {name: 'Pumpkin pie', department: 'grocery', price: 19},
  {name: 'Cherry pie', department: 'grocery', price: 1},
  {name: 'Boisonberry pie', department: 'grocery', price: 0},
  {name: 'Poisonberry pie', department: 'grocery', price: 900},
  {name: 'Meat pie', department: 'meat', price: 50}
];

// GOAL: Return a list of food names that
// cost less than 10

// foods.filter(function(food) {
//   return food.price < 10;
// }).map(function(food) {
//   return food.name;
// });

// GOAL: Return a string like "{Food name} - ${price}"
// for foods that cost at least 10, but less than 20,
// and have a department of grocery or meat

var afforableDelicacies = foods.filter(function(food){
  return ((food.department == 'meat' || food.department == 'grocery') && food.price >= 10 && food.price < 20);
}).map(function(food){
  return food.name + " — $" + food.price;  
});


// Here's a more modular approacht to the same problem, which would ultimately be a better abstraction and more flexible.
function affordable (food){
 return food.price >= 10 && food.price < 20;
 }
function department (food){
 return food.department === 'grocery' || food.department === 'meat';
}

foods.filter(function(food) {  
 return  affordable(food) && department(food);
}).map(function(food) {
 return food.name + ' - $' + food.price 
});