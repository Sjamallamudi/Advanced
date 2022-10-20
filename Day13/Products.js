var pdetails = require("./PDetails");

let m1 = pdetails.allProd();
let m2 = pdetails.selectedCategory();
let m3 = pdetails.range();
let m4 = pdetails.out();
let m5 = pdetails.in();

console.log("All the Products: ")
for(let item of m1){
    let str = `Product : ${item.product}, Category : ${item.category}, Price : ${item.price}, Units in stock : ${item.units}`;
    console.log(str);
}

console.log("\nIn the Snacks category we have: ")
for(let item of m2){
    let str = `Product : ${item.product}, Price : ${item.price}, Units in stock : ${item.units}`;
    console.log(str);
}

console.log("\nIn the given price range we have: ")
for(let item of m3){
    let str = `Product : ${item.product}, Category : ${item.category}, Units in stock : ${item.units}`;
    console.log(str);
}

console.log("\nThe Out of stock Products are: ")
for(let item of m4){
    let str = `Product : ${item.product}, Category : ${item.category}, Price : ${item.price}`;
    console.log(str);
}

console.log("\nThe In stock Products are: ")
for(let item of m5){
    let str = `Product : ${item.product}, Category : ${item.category}, Price : ${item.price}`;
    console.log(str);
}


