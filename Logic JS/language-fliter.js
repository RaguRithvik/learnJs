let language =[
    {
        "value": "ar-AE",
        "label": "Arabic(U.A.E)"
    },
    {
        "value": "zh-CN",
        "label": "Chinese (Simplified)"
    }
]

let multi_language = [
    {
        "lang-code": {
            "value": "ar-AE",
            "is_require": true,
            "error": false,
            "type": "text",
            "err_msg": ""
        }
    },
    {
        "lang-code": {
            "value": "zh-CN",
            "is_require": true,
            "error": false,
            "type": "text",
            "err_msg": ""
        },
    },
    {
        "lang-code": {
            "value": "IN-TM",
            "is_require": true,
            "error": false,
            "type": "text",
            "err_msg": ""
        },
    }
]
//"01. Language Fliter --> Multi_langauge Map check Includes" + 
// console.log(language.filter(lang=>(multi_language.map(val=>val["lang-code"]["value"])).includes(lang.value)))

//"02. Language Fliter --> Multi_langauge Map" + 
console.log(language.filter(lang=>multi_language.map(val=>val["lang-code"]["value"] == lang.value)))

//"03. Multi_langauge Map --> Language Fliter" + 
// console.log(multi_language.map(val =>language.filter(f=>f.value==val["lang-code"]["value"])))
