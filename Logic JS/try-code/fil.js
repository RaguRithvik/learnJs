let old = [{
    "payment_booking_id": 87,
    "booking_id": "7",
    "booking_seq_no": "BOOK_124-2122",
    "booking_date": "24/03/2022 08:43:48",
},{
    "payment_booking_id": 88,
    "booking_id": "8",
    "booking_seq_no": "BOOK_125-2122",
    "booking_date": "24/03/2022 08:43:48",
},{
    "payment_booking_id": 89,
    "booking_id": "9",
    "booking_seq_no": "BOOK_126-2122",
    "booking_date": "24/03/2022 08:43:48",
}]

let newd = [{
    "payment_booking_id": '',
    "booking_id": '7',
    "booking_seq_no": "BOOK_124-2122",
    "booking_date": "24/03/2022 08:43:48",
},{
    "payment_booking_id": "",
    "booking_id": "10",
    "booking_seq_no": "BOOK_128-2122",
    "booking_date": "24/03/2022 08:43:48",

}]

// console.log(old.filter(f => (newd.map(v => v.booking_seq_no)).includes(f.booking_seq_no)))
let get = old.filter(f => (newd.map(v => v.booking_seq_no)).includes(f.booking_seq_no))
console.log(get)
const children = newd.concat(get);
// console.log(children)

let result = children.reduce((res, product) => { 
    if (res[product.booking_seq_no] && res[product.payment_booking_id] =='') {
        res[product.booking_seq_no] = product;
    }
    return res;
}, {});

console.log(Object.values(result));