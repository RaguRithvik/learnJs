const nest = [
    [
        [],
        [
            "",
            "",
            ""
        ],
        [],
        [],
        [
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "Event Location / Supplier Setup",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],

    ]
]
var op=nest.map((f=>(f.filter(v=>v!=""))))

var op2=op.map((f=>(f.map(iff => iff.filter(v=>v!="" )))))
// var op= nest.map((f=>(f.map(nf =>(nf.filter(v=>v!=""))))))
// var op2 = op.map(f =>(f.map(nf =>(nf.filter(v=>v.length !== 1)))))
console.log(op2)
// console.log(op)
