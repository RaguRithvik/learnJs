const one = [
{
      "job_id": "132",
      "type_of_services": "Storage",
      "charge_code": "Commision Income",
      "charge_id": "9",
      "tds_type": "194",
      "tds_percentage": "5.00",
      "tds_amount": "2300.00",
      "is_tds": "1",
      "row_id": "11",
  },
  {
    "job_id": "133",
    "type_of_services": "Storage",
    "charge_code": "Commision Income",
    "charge_id": "9",
    "tds_type": "194",
    "tds_percentage": "5.00",
    "tds_amount": "2900.00",
    "is_tds": "2",
    "row_id": "12",
},
{
  "job_id": "134",
  "type_of_services": "Storage",
  "charge_code": "Commision Income",
  "charge_id": "9",
  "tds_type": "194",
  "tds_percentage": "5.00",
  "tds_amount": "4900.00",
  "is_tds": "2",
  "row_id": "13",
},
]
const two = [{"row_id": "11"},{"row_id": "12"}]
let get = one.filter(f => (two.map(v => v.row_id)).includes(f.row_id));

// console.log(get)

const fruitChecked = get.map(fruit => ({ ...fruit,tds_amount: '0'}))

// console.log(fruitChecked);

const myArray = one.concat(fruitChecked);

// console.log(myArray)

let result = myArray.reduce((res, product) => { 
  if (!res[product.job_id]) {
      res[product.job_id] = product;
      // console.log(Number(res[product.job_id].tds_amount))     
  } 
  else if (Number(res[product.job_id].tds_amount) > Number(product.tds_amount)) { 
      res[product.job_id] = product;
  }
  return res;
}, {});

console.log(result)