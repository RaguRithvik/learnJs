// remove duplicate js

let myArray = [
    {name: "apple", cost: "10"},   
    {name: "apple", cost: "20"},
    {name: "bannana", cost: "10"},
    {name: "mango", cost: "20"},
    {name: "apple", cost: "60"},
    {name: "mango", cost: "50"},
    {name: "orange", cost: "30"}
]

let result = myArray.reduce((res, product) => { 
    
    if (!res[product.name]) {
        // The product does not exist in the map, add it
        res[product.name] = product;
        // console.log(res[product.name])
        // console.log(product.cost)
        // console.log(res[product.name].cost)
        
    } 
    else if (Number(res[product.name].cost) > Number(product.cost)) { 
        // A cheaper product exists, replace it. 
        res[product.name] = product;
    }
    return res;
}, {});
// console.log(JSON.stringify)

console.log(Object.values(result));