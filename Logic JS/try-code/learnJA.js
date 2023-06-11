//for-loop
// const arr1 = [10,20,30, 50, 40, 200];
// let num = 0
// for(let n of arr){
//     num+=n
// }
// console.log(num)

// sort
// var tet = arr.sort((a, b)=> a - b)
// console.log(tet)

// sort-order
// const nest = [{id:3, name:"Ragu"},{id:2, name:"Ragu1"},{id:10, name:"Ragu3"},{id:8, name:"Ragu"}]
// console.log(nest.sort((a, b) => a.id - b.id))

// reducer
// const nest = [{id:3, name:"Ragu"},{id:2, name:"Ragu1"},{id:10, name:"Ragu3"},{id:8, name:"Ragu"}]
// console.log(nest.reduce((acc, current)=> {
// return acc
// },{}))
// const arr = [10,20,30, 50, 40, 200, 30];
// // console.log(arr.reduce((acc, cu) => acc+cu))
// console.log(arr.reduce((acc, cur) => {
//     if(acc.includes(cur)){
//         acc.push(cur)
//     }
// }))

const arr = [{label: 'All', value: 'All01'},{label: 'All', value: 'A02'},{label: 'Alex', value: 'Ninja'},{label: 'Bill', value: 'Op'},{label: 'Cill', value: 'iopop'}]

var result = arr.reduce((acc, cur) =>{
    if(!acc.some(obj => obj.label == cur.label)){
        acc.push(cur);
       
    }
return acc
},[])
// console.log(result)

// let myArray = [
//     {role: "role-1", deviceId: ""},
//     {role: "role-2", deviceId: "d-2"},
//     {role: "role-3", deviceId: "d-3"},
//     {role: "role-1", deviceId: "d-1"},
//     {role: "role-2", deviceId: ""},
//     {role: "role-4", deviceId: ""},
//     {role: "role-5", deviceId: ""}
// ]

// const res = myArray.reduce((agg, itr) => {
//     console.log(agg[itr.role])
//     // console.log([itr.role])
//  if (agg[itr.role]) return agg // if deviceId already exist, skip this iteration
// //  agg[itr.role] = itr.deviceId  // if deviceId not exist, Add it
//  return agg
// }, {})

// // let make_array = Object.keys(res).map(key => { return { role: key, deviceId: res[key] }})

// // console.log(make_array)
// console.log(res)

// let student1Courses = ['Math', 'English', 'Programming'];
// let student2Courses = ['Geography', 'Spanish', 'Programming'];

// let commonCourse = [...student1Courses, ...student2Courses].reduce((total, item, index, array) => {
//   (array.indexOf(item, index + 1) !== -1 && total.indexOf(item) === -1) ? total.push(item) : null
//   return total
// }, [])

// console.log(commonCourse)
const clor = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
console.log(clor.slice(4,7).map((data)=> {
    if(data.color.length > 6){
        return data
    }
}))

