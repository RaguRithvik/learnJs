var boj = { name: 'ragu', age: '25' }
var innerobj ={lang:{name: 'ragu', age: '25' }}
for (let cg in innerobj) 
{ 
    // // if ((boj[cg]).name = 'rag') 
    // // { 
    // //     console.log(true) 
    // // } 
    // else { console.log(false) } 
    console.log(innerobj[cg].name)

}
let obj = {
    '1st': {
      name: 'stackoverflow'
    },
    '2nd': {
      name: 'stackexchange'
    }
  };

   
   let wholeArray = Object.keys(obj).map(key => obj[key]);
   console.log(Object.keys(obj).map(key => obj[key]))
  //  console.log(wholeArray[1].name);