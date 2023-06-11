var newd = [
    {
        "booking_job_id": "",
        "job_id": "132",
        "job_no": "ROCKK/JR/00007/22-23",
        "job_date": "06/08/2022 03:32:01",
        "invoice_no": "ROCKK/CFS/00008/22-23",
        "invoice_date": "07/08/2022",
        "total_amount": "14500.00",
        "job_balance_amount": "14500.00",
        "gst_amount": "2610.000000",
        "booking_cost": "",
        "tds_amount": "0",
        "total_cost": 5510,
        "job_tds": [
            {
                "job_id": "132",
                "type_of_services": "Storage",
                "charge_code": "Commision Income",
                "charge_id": "9",
                "tds_type": "194",
                "tds_percentage": "5.00",
                "tds_amount": "2900.00",
                "is_tds": "1"
            }
        ],
        "balance_amount": 14500,
        "gross_amount": "0.00",
        "total_gst_amount": "0.00",
        "total_tds_amount": "0.00",
        "net_amount": "0.00",
        "total_job_amount": "0.00",
        "total_balance_amount": "0.00"
    }
]
var old = [
    {
        "booking_job_id": "",
        "job_id": "132",
        "job_no": "ROCKK/JR/00007/22-23",
        "job_date": "06/08/2022 03:32:01",
        "invoice_no": "ROCKK/CFS/00008/22-23",
        "invoice_date": "07/08/2022",
        "total_amount": "14500.00",
        "job_balance_amount": "14500.00",
        "gst_amount": "2610.000000",
        "booking_cost": "",
        "tds_amount": "2900.00",
        "total_cost": 5510,
        "job_tds": [
            {
                "job_id": "132",
                "type_of_services": "Storage",
                "charge_code": "Commision Income",
                "charge_id": "9",
                "tds_type": "194",
                "tds_percentage": "5.00",
                "tds_amount": "2900.00",
                "is_tds": "1"
            }
        ],
        "balance_amount": 14500,
        "gross_amount": "0.00",
        "total_gst_amount": "0.00",
        "total_tds_amount": "0.00",
        "net_amount": "0.00",
        "total_job_amount": "0.00",
        "total_balance_amount": "0.00"
    },
    {
        "booking_job_id": "",
        "job_id": "133",
        "job_no": "ROCKK/JR/00008/22-23",
        "job_date": "07/08/2022 10:44:00",
        "invoice_no": "ROCKK/CFS/00009/22-23",
        "invoice_date": "07/08/2022",
        "total_amount": "16000.00",
        "job_balance_amount": "16000.00",
        "gst_amount": "2880.000000",
        "booking_cost": "",
        "tds_amount": "3200.00",
        "total_cost": 6080,
        "job_tds": [
            {
                "job_id": "133",
                "type_of_services": "Storage",
                "charge_code": "Commision Income",
                "charge_id": "9",
                "tds_type": "194",
                "tds_percentage": "5.00",
                "tds_amount": "1400.00",
                "is_tds": "1"
            },
            {
                "job_id": "133",
                "type_of_services": "Storage",
                "charge_code": "Commision Income",
                "charge_id": "9",
                "tds_type": "194",
                "tds_percentage": "5.00",
                "tds_amount": "1800.00",
                "is_tds": "1"
            }
        ],
        "balance_amount": 16000,
        "gross_amount": "0.00",
        "total_gst_amount": "0.00",
        "total_tds_amount": "0.00",
        "net_amount": "0.00",
        "total_job_amount": "0.00",
        "total_balance_amount": "0.00"
    }
]
const children = old.concat(newd);
console.log(children)
let result = children.reduce((res, product) => { 
    if (!res[product.job_no]) {
        // The product does not exist in the map, add itc
        res[product.job_no] = product;
        // console.log(res[product.job_no])
    } else if (Number(res[product.job_no].tds_amount) < Number(product.tds_amount)) { 
        // A cheaper product exists, replace it. 
        res[product.booking_seq_no] = product;
        console.log("done 2")
    }ś
    return res;
}, {});
console.log(result)