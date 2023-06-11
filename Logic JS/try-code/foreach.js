var fruits = [ {name:"banana", weight:150},{name:"apple", weight:95},{name:"orange", weight:160},{name:"kiwi", weight:80} ];

var heavy_fruits = [];
myfruit = {}; // here's your object

fruits.forEach(function(item,index) {
    if ( item.weight > 100 ) { 
        myfruit["name"] = item.name;
        myfruit["weight"] = item.weight; // you modify it's properties
    }
    heavy_fruits.push(myfruit); // you push it to the array
    // console.log(heavy_fruits)
});
console.log(heavy_fruits)
var service = ["CFS","CHA Services"]
var push_services = []
service_type = {}
fruits.forEach(function(item) {
    service_type["service_type"] = item;
    push_services.push(myfruit);
});
// console.log(push_services)