var firstone = [
    {
        "client-branch-name": "aaa",
        "client-branch-key": "2sCl2ZwWgTup1RcRV8Nf9mkgHjACWj9Lf9wirbOATSc=",
        "client-key": null
    },
    {
        "client-branch-name": "Branch - 2",
        "client-branch-key": "vpbQrQZMQiA6mcBgAbCVGLzeyoJgJnBBUSl/yY1l8Fo=",
        "client-key": null
    }
]
var secondone = [
    {
        "isError": false,
        "value": {
            "client-branch-key": "hdhh",
            "menu-rights-mas-key": ""
        },
        "msg": "",
        "isRequired": true,
        "isChecked": true
    },
    {
        "isError": false,
        "value": {
            "client-branch-key": "",
            "menu-rights-mas-key": ""
        },
        "msg": "",
        "isRequired": false,
        "isChecked": false
    }
]

// console.log(secondone.filter(f=>(firstone.map(v=>v["client-branch-key"]).includes(f["value"][ "client-branch-key"]))).length?secondone.filter(f=>(firstone.map(v=>v["client-branch-key"]).includes(f["value"][ "client-branch-key"])))[0].isRequired:false)
console.log(find(el=>el.value[userConstants.CLIENT_BRANCH_KEY]==val[userConstants.CLIENT_BRANCH_KEY]))

branches.filter(f=>(clientBranches.map(v=>v["client-branch-key"]).includes(f["value"][ "client-branch-key"]))).length?branches.filter(f=>(clientBranches.map(v=>v["client-branch-key"]).includes(f["value"][ "client-branch-key"])))[0].isChecked:false