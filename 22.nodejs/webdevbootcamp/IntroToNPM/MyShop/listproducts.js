var faker = require('faker');

// var randomProduct = faker.commerce.productName();
// var randomMaterial = faker.commerce.productMaterial();
// var randomPrice = faker.commerce.price();

//console.log(randomProduct);

console.log("==================");
console.log("WELCOME TO MY SHOP");
console.log("==================");

for(var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + " - " + faker.commerce.productMaterial() + " - $" + faker.commerce.price());
}



