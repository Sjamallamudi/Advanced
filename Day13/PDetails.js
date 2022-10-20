
const ProductArr = [
    { product : "Bru", category : "Coffee", price : 100, units : 5},
    { product : "Maggi", category : "Noodles & Soups", price : 80, units : 0},
    { product : "Knor soups", category : "Noodles & Soups", price : 40, units : 2},
    { product : "Munch", category : "Snacks", price : 10, units : 8},
    { product : "ThumbsUp", category : "Cool Drinks", price : 65, units : 0},
    { product : "Kurkure", category : "Snacks", price : 20, units : 15},
];

exports.allProd = function(){
    let parray = ProductArr;
    return parray;
};

exports.selectedCategory = function(){
    let scat = ProductArr.filter(item => item.category=="Snacks");
    return scat;
}

exports.range = function(){
    let prange = ProductArr.filter(item => item.price >=30 && item.price<=100);
    return prange;
}

exports.out = function(){
    let outofst = ProductArr.filter(item => item.units == 0);
    return outofst;
}

exports.in = function(){
    let inst = ProductArr.filter(item => item.units > 0);
    return inst;
}
