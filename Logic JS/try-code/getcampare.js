// var one = [{"value": "CFS","label": "CFS"},{"value": "CHA Services","label": "CHA Services"}]
// var two = [{"service_type": "CFS"},{"service_type": "CHA Services"}]

// let get = one.filter(f => (two.map(v => v.service_type)).includes(f.value));
// console.log(get)

var one = ["CFS","CHA Services","CHA Reimbursement Services"]
// var two = [{"value": "CFS","label": "CFS"},{"value": "CHA Services","label": "CHA Services"}]
var two = "CHA Services"
let get = one.filter(f => two.includes(f));
console.log(get[0])