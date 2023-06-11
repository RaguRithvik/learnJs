const data1 = [{
    "job_id": "133",
    "total_amount": "16000.00",
    "job_balance_amount": "16000.00",
    "gst_amount": "2880.000000",
    "booking_cost": "",
    "tds_amount": "3200.00",
    "total_cost": ""},
    {
        "job_id": "135",
        "total_amount": "16000.00",
        "job_balance_amount": "16000.00",
        "gst_amount": "2880.000000",
        "booking_cost": "",
        "tds_amount": "3200.00",
        "total_cost": ""}
    ]
const data2 = [{
    "row_id": "11",
    "job_id": "133",
    "type_of_services": "Storage",
    "charge_code": "Commision Income",
},
{
    "row_id": "12",
    "job_id": "133",
    "type_of_services": "Storage",
    "charge_code": "Commision Income",
    "charge_id": "9",
    "tds_type": "194",
}]
console.log(data1[1].job_id === data2[1].job_id)
// console.log((data2.filter(o1 => data1.some(o2 => o1.job_id == o2.job_id))))