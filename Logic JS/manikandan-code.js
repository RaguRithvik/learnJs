// remainder 0 exist code 
// var a=[0,1,2,3];
// var c=[];
// for(let i=0;i<a.length;i++){
// // for(let i=a.length-1;i>=0;i--){
//     // console.log(a[i]*b[i])
//     if(i%2==0){
//     console.log(a[i])
//     }
// }


// concat string using join and array method 
// var a=['m','a','n','i','k','a','n','d','a','n'];
// // console.log(a.join(""))
// var name="";
// for(i=0;i<a.length;i++){
//     // console.log(a[i])
//     name=name+a[i]
// }
// console.log(name)


// // 30 min task
// // sum of elements in a array   
// // multiplication of element in a array
// //

// Add inside the array 
// var a=[1,2,3,4,5]
// var name=0;
// for(i=0;i<a.length;i++){
//     // console.log(a[i])
//     name=name+a[i]
// }
// console.log(name)


// Add inside the array 
// var a=[1,2,3,4,5]
// function add(plus){
// var name=0;
// for(i=0;i<plus.length;i++){
//     // console.log(a[i])
// name=name+plus[i]
// }
// return name
// }
// console.log(add([1,2,3,4,5]))







// // htmll

// // count(3)


// // function count(val){

// //     var ppsq=10;
// //     var totalp=ppsq*val;
// //     console.log(totalp)
// // }
// var a=['a','Y','b','A']

// for(i=0;i<a.length;i++){
//     for(j=i+1;j<a.length;j++){
//     if(a[i]>a[j])
//     {
//         let t=a[i];
//          a[i]=a[j];
//          a[j]=t;
//     }
// }
// } 
// console.log(a)
// // console.log(t)
// // var arr = [2, 5, 8, 1, 4]
// // console.log(arr.sort());
// // console.log(arr);

// var charCode = a[i].charCodeAt(0);
// console.log(charCode);


// normal array filter method two array varible one depends another 
// var a=[];
// var detail=[{marks:80,status:"a"},{marks:30,status:"f"},{marks:60,status:"c"}];
// var update=[{grade:"a",person:1,english:'p'},{grade:"a",person:4,english:'p'},{grade:"f",person:2,english:"f"},{grade:"c",person:3,english:'p'}];
// for(let i=0;i<detail.length;i++){
//     var record = update.filter(f=>f.grade==detail[i].status)
//     // console.log(detail[i].status)
//     // console.log(record)
//     // console.log(record[0].person)
//     a.push(record)
// }
// console.log(a)



// normal array filter method two array varible one depends another and loop again the filter variable
// var seating=[{type:"S",ticpric:200},{type:"D",ticpric:120},{type:"AC",ticpric:400}];
// var passg=[{name:"A",seat:"AC"},{name:"B",seat:"D"},{name:"C",seat:"D"},{name:"D",seat:"S"},
// {name:"E",seat:'S'}];
// console.log("NAME"+"---"+"SEAT"+"-----"+"PRICE")
// var total=0
// for(let i=0;i<seating.length;i++){
//    var PASSENGER=passg.filter(f=>f.seat==seating[i].type);
// //    console.log(PASSENGER)
//      for(let j=0;j<PASSENGER.length;j++)
//      {
//          console.log(PASSENGER[j].name +"------"+seating[i].type+"--------"+seating[i].ticpric)       
//          total=total+seating[i].ticpric;
//      }    
// }

// console.log("TOTAL -----------------"+total)



// not normal array its array inside the json nested array
//  filter method two array varible one depends another and loop again the filter variable
// var info=[
//     {
//        reg_no:1,
//        marks:[{sub:"EG",grade:"S"},{sub:"CHE1",grade:"A"},{sub:"PHY1",grade:"B"},{sub:"ENG1",grade:"U"},{sub:"M1",grade:"D"}]
//      },
//      {
//         reg_no:2,
//         marks:[{sub:"EG",grade:"B"},{sub:"CHE1",grade:"C"},{sub:"PHY1",grade:"D"},{sub:"ENG1",grade:"B"},{sub:"M1",grade:"U"}]
//      },
//      {
//         reg_no:3,
//         marks:[{sub:"EG",grade:"U"},{sub:"CHE1",grade:"E"},{sub:"PHY1",grade:"E"},{sub:"ENG1",grade:"C"},{sub:"M1",grade:"D"}]
//     },
//     {
//         reg_no:4,
//         marks:[{sub:"EG",grade:"D"},{sub:"CHE1",grade:"C"},{sub:"PHY1",grade:"A"},{sub:"ENG1",grade:"E"},{sub:"M1",grade:"U"}]
//     }

//     ];


// var student_info=[{name:"stdent1",reg_no:1},{name:"stdent2",reg_no:2},{name:"stdent3",reg_no:3},{name:"stdent4",reg_no:4}];

// for(let i=0;i<student_info.length;i++){
//     var count=info.filter(f=>f.reg_no==student_info[i].reg_no)  
//     console.log(count[0])
//     var count1=count[0];
//         for(let j=0;j<count1.marks.length;j++){           
//             console.log(count1.marks[j].sub+"     "+count1.marks[j].grade)
//             // console.log(count[0].reg_no)
//             // console.log(count[0].marks[j])
//             // console.log(count[0].marks[j].sub)         
//             // console.log(count[0].marks[j].grade)
//             // console.log(count[0].marks[j].sub+"-----"+count[0].marks[j].grade)
//         }
//        console.log("------------------------")
// }


// let varOne = 0;
// for (i = 0; i < 4; i++){
//     for (j = 0; j < 4; j++){
//         varOne++;
//     }
// }
// console.log(varOne);

// var arr = [[1,2], [3,4], [5,6]];
// for (var i=0; i < arr.length; i++) {
//  for (var j=0; j < arr[i].length; j++) {
//    console.log(arr[i][j]);
//  }
// }
// var n = 5;
// var stars = "";

// for(var i=0; i<n; i++){
//         stars = "";
//     for(var j=i; j<n; j++){
//         stars = stars + " *";
//     }
//     for(var k=i; k>0; k--){
//         stars = stars + " " + k;
//     }
//     console.log(stars);
// }
// var catalog = 
// {
//     "products": [
//         {
//             "name": "prod 1",
//             "versions": [
//                 "ver 1",
//                 "ver 2"
//             ]
//         },
//         {
//             "name": "prod 2",
//             "versions": [
//                 "ver 1",
//                 "ver 2"
//             ]
//         }
//     ]
// };

// for(var i = 0; i < catalog.products.length; i++)
// {
//     var product = catalog.products[i];
//     var productName = product.name;
//     for(var j = 0; j < product.versions.length; j++)
//     {
//         var version = product.versions[1];
//     }
//     console.log(product)
//     console.log(version)
// }
// var info=[
//     {
//        reg_no:1,
//        marks:[{sub:"EG",val:30},{sub:"CHE1",val:40},{sub:"PHY1",val:40},{sub:"ENG1",val:40},{sub:"M1",val:40}]
//      },
//      {
//         reg_no:2,
//         marks:[{sub:"EG",val:40},{sub:"CHE1",val:30},{sub:"PHY1",val:40},{sub:"ENG1",val:40},{sub:"M1",val:40}]
//      },
//      {
//         reg_no:3,
//         marks:[{sub:"EG",val:40},{sub:"CHE1",val:40},{sub:"PHY1",val:40},{sub:"ENG1",val:30},{sub:"M1",val:40}]
//     },
//     {
//         reg_no:4,
//         marks:[{sub:"EG",val:40},{sub:"CHE1",val:90},{sub:"PHY1",val:30},{sub:"ENG1",val:40},{sub:"M1",val:40}]
//     }

//     ];
//     for(let i=0;i<info.length;i++){
//         // console.log(info[i])
//         var filter=info[i].marks.filter(f=>f.val<35)
//         // console.log(filter)
//         console.log(filter[0].sub+"-----"+filter[0].val)
//         if(filter){
//             console.log("f")

//         }
//         else if(!filter){
//             console.log("p")

//         }

//         //     for(let j=0;j<filter[i].val.length;i++){
//         //           if(filter.val<35){

//         //             console.log("f")

//         //     }

//         // }       

//     }
//     var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         // console.log(Avgmarks)
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A");
//         }
// var array = [1,2,4,5,9,66,7,2,6,8];
// var largest= 0;

// for (i=0; i<=array.length;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }




// console.log(largest);
// var array=[22,2,3,4,5,6,4,3,2,5,6,5,1,4,9,5]
// for(let i=0;i<array.length;i++){
//     for(let j=1;j<array.length;j++){
//         console.log(i+""+j)
//         if(array[i]>array[j])
//         console.log(array[i])
//     }
// }
// var array=[5,2,5,4,5,6,4,5,2,5,6,5,1,5,9,5]
// var array=[2, 3, 6, 4,5]
// var b=[1,6,4,9]
// var maxCount = 0;  
// // var index = -1; // sentinels  
// for(let i = 0; i < array.length; i++)  
// {  
//     var count = 0;  
//     for(let j = 0; j < b.length; j++)  
//     {  
//         if(array[i]==b[j])
//         console.log(b[j])
//         if(array[i] == array[b])  
//         count++;  
//     }  

//     // update maxCount if count of  
//     // current element is greater  
//     if(count > maxCount)  
//     {  
//         maxCount = count;  
//         index = i;  
//     }  
// }  

// // if maxCount is greater than n/2  
// // return the corresponding element  
// if (maxCount < array.length/2)  {
// // console.log(array[index]);
// }  

// else{
// console.log("No Majority Element");  
// }
// var a=[1,2,3,4,5,6,7,8,9]
// for(let i=a.length-2;i>=0;i--){
//     // console.log(a[i])
//     for(let j=0;j<3;j++){
//   console.log(a[(i+j)])
//     }
//     // for(let j=1;j<array.length;j++){
// //  console.log(array[j])
// //  console.log(array[i])
//     }
// var a=[1,2,3,4,5,6,7,8,9]
// for(let i=0;i<a.length-2;i--){
//     // console.log(a[i])
//     for(let j=0;j<3;j++){
//   console.log(a[(i+j)])
//     }
//     // for(let j=1;j<array.length;j++){
// //  console.log(array[j])
// //  console.log(array[i])
//     }
// }
// let sharkString = "sharks";

// // Iterate through each index in the string
// for (let shark of sharkString) {
//     console.log(shark);
// }
// var a=[1,4,3,7]
// for(i=0; i<a.length; i++)
// {

//     for(j=i+1; j<a.length; j++)
//     {

//         if(a[i] > a[j])
//         {
//             temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;

//         }

//     }
// }
// console.log(a)
// var json = {
//     jsonData: {
//     one: [11, 12, 13, 14, 15],
//     two: [21, 22, 23],
//     three: [31, 32]
//     }
//     };

//     for (var key in json.jsonData) {
//         for (var key1 in json.jsonData[key]) {
//             console.log(json.jsonData[key][key1])
//         }
//         // console.log(key)
//     }
// var json = {
//     jsonData: [{
//     one: [11, 12, 13, 14, 15]
//     }, {
//     two: [21, 22, 23]
//     }, {
//     three: [31, 32]
//     }]
//     };

//     for (var i = 0; i < json.jsonData.length; i++) {
//         for (var key in json.jsonData[i]) {
//             for (var j = 0; j < json.jsonData[i][key].length; j++) {
//                 console.log(json.jsonData[i][key][j])
//             }
//         }
//     }
// var arr=[ 1, 2, 4, 5, 6 ]
// var total = (arr.length+1)*(arr.length+2)/2; 
//         for (let i = 0; i <arr.length; i++) 
//         { 
//              total -= arr[i];
//              console.log(total) 
//         }
//         var d=Date();
//         console.log(d)
// var a=[3,0,1]
// var b=[0,1,2,3]
// var val=0;
// for(let i=0;i<=a.length;i++){
//     val=val^i;
//     var data=0;
// for(let i=0;i<b.length;i++){
//     data=data^a[i]
//     var store=val^data;

// }
// }

// console.log(store)
// var arr=[1,8,7]
// var a=[2,4,5]
// for(let i=0;i<arr.length;i++){
// for(let j=0;j<3;i++){
//     if(arr[i]>a[j]){

//         console.log(arr[i])

//     }
//     else if(arr[i]<a[j]){

//         console.log(a[j])

//     }
// }
// }
// function mergeSortedArray(a,b){
// 	for(var i=0;i<b.length;i++){
// 		a.push(b[i]);
// 	}
// 	// console.log(a);
// for(i=0;i<a.length;i++)
//     {
//         for(j=i+1;j<a.length;j++)
//         {
//             if(a[i]>a[j])
//             {
//                 temp=a[i];
//                 a[i]=a[j];
//                 a[j]=temp;
//             }
//         }
//     }
//     return a;
// }
// console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8]));
//     var array=[1, 2, 3, 4, 5, 6, 7]
//     for(let i=0;i<array.length;i++){
//         for(let j=array.length-1;j>=0;j--){
//   if(array[i]<array[j]){
//       console.log(array[j])
//       i++;
//       console.log(array[i])
//       j--;
//   }

//         }
//     }



// sort the array 0's 1's and 2's
// a=[0,1,2,0,1,2]
// l=a[0];
// m=a[0];
// h=a[5];
// while(m<=h){
//     if(a[m]==0)
//     swap(a[l],a[m])
//     l++;
//     m++;
//     if(a[m]==1)
//     m++;
//     if(a[m]==2)
//     swap(a[m],a[h])
//     h--;        
// }
// console.log(a[m])


// leader in an array
// var arr = [1,12,3,4,6];

// var leader = arr[arr.length-1];
// console.log(leader);

// for(var i= arr.length - 2;i >= 0; i--)
// {
// 	if(arr[i] > leader)
//   {
//   	console.log(arr[i]);
//   }
// }


// reverse a group of array
// var arr=[1, 2, 3, 4, 5, 6, 7, 8]
// var k=3;

// for (let i = 0; i <arr.length; i += k) 
//         { 
//             var left = i; 

// // to handle case when k is not multiple 
// // of n 
// var right = Math.min(i + k - 1, arr.length - 1); 
// var temp;


//             // reverse the sub-array [left, right] 
//             while (left < right) 
//             { 
//                 temp=arr[left]; 
//                 arr[left]=arr[right]; 
//                 arr[right]=temp; 
//                 left+=1; 
//                 right-=1; 
//             } 
//         } 
//      console.log(arr)

// Query String Ex
// var query_string="?name=mani&age=18"
// //remove ? symbol   step 1  step 2
// query_string=query_string.split("?");  //step 1 split string based on ?   
// query_string=query_string.join("");    // join the spleted string by "" empty value  here ? is removed
// //split each fields step1  step2 step3 step4
// query_string=query_string.split("&");  // step 1 split key=value by & symbol , because & symbole is placed between each key=value pare  
//                                        // by result it give array

// var json={};
// for(let i=0;i<query_string.length;i++)   //step 2 iterate array
// {
//     var a=query_string[i].split("=");    // step 3 split key value by = symbol because key and value are separed by = symbol
//                                          // by result it give  array with size 2   0th index is key 1th index is value  
//     json[a[0]]=a[1];                //step4 form json
// }

// console.log(json)


// split cricket score number and strings and add them
// var a=["w+3",3,6,7,8];
// //  var num=a.split("")  
// var array1=[];
// var array2=[];
// var run=0;
// for(var i=0;i<a.length;i++){
//     if(typeof a[i]=="number"){
//         run=run+a[i]        
//     }
//     else{
//         var split=a[i].split("+")
//         a[0]=1;
//         run=run+a[1]+a[0]
//     }
// }
// console.log(run)



// split the array into numbers and strings
// var array = ["w+3","s+2","d+4"]
// var array1 = []; // better to define using [] instead of new Array();
// var array2 = [];

// for (var i = 0; i < array.length; i++) {
//     var split = array[i].split("+");  // just split once
//     array1.push(split[0]); // before the dot
//     array2.push(split[1]); // after the dot
// }
// console.log("array1", array1);
// console.log("array2", array2);
// console.log(split)




// split even and odd numbers and arrange ascending and descending orders
// var numbers=[8,3,6,1,9,4]
// var odd=[];
// var even=[];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       // number is even


//       for (let i = 0; i < numbers[i].length; i++) {
//         // loop through the array, moving forwards:
//         // note in loop below we set `j = i` so we move on after finding greatest value:
//         for (let j = i+1; j < numbers[i].length; j++) {
//           if (numbers[i] < numbers[j]) {
//            var max= numbers.max()
//             let temp = numbers[i]; // store original value for swapping
//             numbers[i] = numbers[j]; // set original value position to greater value
//             numbers[j] = temp; // set greater value position to original value            
//           };          
//         };          
//       };
//       even.push(numbers[i])  

//     } else {
//         for (let i = 0; i < numbers[i].length; i++) {
//             // loop through the array, moving forwards:
//             // note in loop below we set `j = i` so we move on after finding greatest value:
//             for (let j = i; j < numbers[i].length; j++) {
//               if (numbers[i] > numbers[j]) {
//                 let temp = numbers[i]; // store original value for swapping
//                 numbers[i] = numbers[j]; // set original value position to greater value
//                 numbers[j] = temp; // set greater value position to original value  

//               };                                              
//             };                                                         
//           };
//       // number is not even (=odd) 
//       odd.push(numbers[i])       
//     }      
//   }
// //   odd.sort(function(a, b){return b - a});
//   console.log(odd)  
//   console.log(even)



//    var numbers=[3,2,5,3,7,9]
//     let B_A = []
//         for(let i = 0; i < numbers.length; i++) {
//          for(let j = i+1; j < numbers.length; j++) {
//             if (numbers[i] > numbers[j]) {
//                 let temp = numbers[i];
//                 numbers[i] = numbers[j];
//                 numbers[j] = temp;
//             }
//         }
//         B_A.push(numbers[i])
//     }
//    console.log(B_A)




// split even and odd numbers and arrange ascending and descending orders
// var numbers=[8,3,4,1,9,6]
// var odd=[];
// var even=[];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//             // number is even
//      even.push(numbers[i])  

//     } else {       
//       // number is not even (=odd) 
//       odd.push(numbers[i])       
//     }      
//   }
//   for (let i = 0; i < even.length; i++) {
//     // loop through the array, moving forwards:
//     // note in loop below we set `j = i` so we move on after finding greatest value:
//     for (let j = i+1; j < even.length; j++) {
//       if (even[i] < even[j]) {      
//         let temp = even[i]; // store original value for swapping
//         even[i] = even[j]; // set original value position to greater value
//         even[j] = temp; // set greater value position to original value            
//       };          
//     };          
//   };
//   for (let i = 0; i < odd.length; i++) {
//     // loop through the array, moving forwards:
//     // note in loop below we set `j = i` so we move on after finding greatest value:
//     for (let j = i; j < odd.length; j++) {
//       if (odd[i] > odd[j]) {
//         let temp = odd[i]; // store original value for swapping
//         odd[i] = odd[j]; // set original value position to greater value
//         odd[j] = temp; // set greater value position to original value  

//       };                                              
//     };                                                         
//   };
//   console.log(odd)  
//   console.log(even)




// ebbill sample program 
// var unit=100;
// var n;
// n=Math.floor(unit/50);
// console.log(n)
// balance=unit%50;
// var total=0;
// console.log(balance)
// for(i=1;i<=n;i++){
//     total=total+i*50;      
// }
// // console.log(total)
// if(balance>0){
//     if(n>0){
//         total=total+(n+1)*balance;
//     }
//     else{
//         total=total+balance
//     }
// } 
// console.log(total)


// multiplication of two arrays in multiple ways
// var a=[1,2,3,4];
// var b=[5,6,7,8];
// var c=[];
// for(let i=0;i<a.length;i++){
// for(let j=b.length-1;j>=0;j--){
//     // console.log(a[i]*b[i])
//     c.push(a[i]*b[j])
//     //c=a[0]*b[3]

// }
// }
// console.log(c)


// binary search 
// let arr=[2,4,6,7,9,11,14,17];
// function binarySearch(arr,elem){
//     let start=0;
//     let end=arr.length-1;
//     let middle=Math.floor((start+end)/2);
//     console.log(middle)
//     while(arr[middle]!==elem && start<=end){        
//         if(arr[middle]<elem){
//             start=middle+1;
//         }
//         else{
//             end=middle-1;
//         }middle=Math.floor((start+end)/2);
//     }
//     return arr[middle]==elem?middle:-1
// }
// console.log(binarySearch(arr,6))



// inversion of array;  (it means greatest element count)  
// function number_of_InversionsNaive(arr) {
//     var ctr = 0;
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) 
//               ctr++;
//         }
//     }
//     return ctr;
// }    
// console.log(number_of_InversionsNaive([4, 3, 2, 5, 9]));   
// console.log(number_of_InversionsNaive([1, 5, 4, 3]));   
// console.log(number_of_InversionsNaive([10, 30, 20, -10]));


// bubble sort 
// function bubbleSort(inputArr) {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = i+1; j < len; j++) {
//             if (inputArr[i] > inputArr[j]) {
//                 let tmp = inputArr[i];
//                 inputArr[i] = inputArr[j];
//                 inputArr[j] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };
// console.log(bubbleSort([9,10,5,6,2,7]))


// merge sort 
// function mergeSort(array){
//     if(array.length<2){
//         return array
//     }
//     const middle=Math.floor(array.length/2);

//     const left=array.slice(0,middle);
//     const right=array.slice(middle,array.length);
//     return repeatSort(mergeSort(left),mergeSort(right))
// }
// function repeatSort(left,right){
//     const array=[];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             array.push(left.shift())
//         }
//         else{
//             array.push(right.shift())
//         }            
//     }
//     return array.concat(left.slice()).concat(right.slice());
// }
// console.log(mergeSort([9,10,5,6,2,7]))



// factorial 
// var n=7;
// var ans=1;
// for(let i=n;i>=1;i--){
// ans=ans*i;
// }
// console.log(ans)


// prime numbers 
// var number=24;    
// let isPrime = true;
// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log("is a prime number");
//     } else {
//         console.log("is a not prime number");
//     }
// }
// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }


//  validation upperCase and ^ means character wise   
// function upper_case(str)
// {
//     var regexp = /[A-Z]/;
//    if (regexp.test(str))
//     {
//       console.log("uppercase is found");
//     } 
//     else
//     {
//       console.log(" uppercase is not found");
//     }
//     return str;
// }
// console.log(upper_case('abcD'));
// console.log(upper_case('abcd'));


// 2 dimensional array example(including mark calculate using 2d)
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
// // ncluding mark calculate using 2d
// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];     
// }
// var avg = (Avgmarks/students.length);
// console.log("Average grade: " +avg);
// // finish
// // console.table(students);
// for(i=0;i<students.length;i++){
//     for(j=0;j<students[i].length;j++){
//         console.log("["+i+","+j+"]"+students[i][j])
//     }
// }


// splice understanding 
// var employee = [
//     [101, 'Shyam', 'Aligarh'],
//     [100, 'Ram', 'Agra'],
//     [102, 'Amit', 'Gwalior'] ];
// employee.splice(0,1);// remove 1 element from 0 index
// console.log(employee);
// employee.splice(0,1);// remove 2 element from 0 index
// console.log(employee);
// employee.splice(0,0,[103, 'Rahul', 'Mumbai']);// add 1 element at 0,0
// console.log(employee);
// employee.splice(0,1,[100, 'Ram', 'Agra']);// add 1 element at 0,1
// console.log(employee);



// print stars  normal 
// var text="";
// for(let i=1;i<=10;i++){
//     text=text+"*";
//     console.log(text)
// }

// print stars using 2d 
// var star
// var row=5;
// var col=7;
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//     //    star="*" 
//     console.log("*")              
//     }   

// }


// pyramid stars 
//     function createPyramid(rows)
// {
//     for (let i = 1; i < rows; i++) {
//         var output = '';
//         for (let j =1; j < rows - i; j++) output += ' ';
//         for (let k = 1; k <= i; k++) output += '* ';
//         console.log(output);  
//     } 
// }

// createPyramid(5) // pass number as row of pyramid you want.


// print num in star contents 
// for(var i=1; i<=5; i++){
//     var Num='';
//     for(var j=0; j<i; j++){
//         Num += i;
//     }
//     console.log(Num) }


// print understanding pyramid stars 
// var row=5;
// for(let i=0;i<row;i++){
//     for(let j=0;j<2*row-1;j++){
//         if(j>=row-(i-1)&&j<=row+(i-1)){
//             console.log("*")
//         }
//         else{
//             console.log(" ")
//         }//         
//     }
// }


// function displayPyramid(n) { 
//     for (var i = 0; i < n; i++) { 
//       var str = ''; 
//       for (var j = 1; j < n-i; j++) { 
//         str = str + ' '; 
//       } 
//       for (var k = 1; k <= (2*i+1); k++) { 
//         str = str + '*'; 
//       } 
//       console.log(str); 
//     } 
//   } 
//   displayPyramid(7)


// Write a JavaScript program to display the current day and time in the following format.
// var today = new Date();
//   var date=today.getDate() 
//   console.log(date)
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   // console.log(prepand)
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   else if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);


// JavaScript: Find 1st January be a Sunday between a range of years below format you have enter date 
// new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
// for (var year = 2014; year <= 2050; year++)
// {
//     var d = new Date(year, 0, 1);
// if ( d.getDay() === 0 )  
//         console.log("1st January is being a Sunday  "+year);
// }


// find a day (name) 
// for (var year = 2014; year <= 2050; year++)
// {
//     var d = new Date(year, 0, 1);
//     var day=d.getDay()
//     var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
//         console.log("1st January is being a Sunday  "+year +" "+ daylist[day]);
// }




// christmas left days program 
// Math.ceil is max 
// Math.floor is min 
// today=new Date();
// var cmas=new Date(today.getFullYear(), 11, 25);
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until Christmas!");


// // output
// console.log(cmas.getTime()) */to get the whatever time this is i dont know/
// console.log(today.getTime()) */to get the whatever time this is i dont know/ 
// console.log(one_day)          */this is caluculate a day per minute,per hour,per day and per milliseconds/


// splice is remove the array element index and slice is removal of string element 
// var a= ["m","a","n","i"]
// var b="sara"
// console.log(a.splice(0,2))
// console.log(b.slice(1))  /* it removes first element of sara o/p is ara/}


// example of substring (it means indicates particular or opposite of slice and splice method) 
// function protect_email(user_email) {
//     var avg, splitted, part1, part2;
//     splitted = user_email.split("@");
//     part1 = splitted[0];
//     avg = part1.length / 2;
//     part1 = part1.substring(0, (part1.length - avg));
//     part2 = splitted[1];
//     return part1 + "...@" + part2;
// };

// console.log(protect_email("robin_singh@example.com"));


// capaital letter to first letter and other are in here 
// function capitalize(str1){
//     return str1.charAt(0).toUpperCase()+ str1.slice(1);
//   }

//    console.log(capitalize('js string exercises'));



// most frequent element in array i understand this one
// var a=[3, 'a', 'a', 'a', 2, 3, 3, 3, 3, 2, 4, 9, 3];
// var element=0;
// var count=0;
// for(let i=0;i<a.length;i++){
//     // var tempElement=a[i];
//     var maxCount=0
//     for(j=0;j<a.length;j++){
//       if(a[i]==a[j]){
//         maxCount++;
//       }
//       if(maxCount>count){
//           element=a[i];
//           count=maxCount;
//       }
//     }    
// }
// console.log("count is "+count+ " "+"counting element is"+ " " +element)



// squares and add the array element 
// function sum_sq(array) {
//     var sum = 0;
//      for(var i=0;i<array.length;i++){
//      sum += Math.pow(array[i], 2);
//     }
//     return sum;
//   }

//   console.log(sum_sq([0,1,2,3,4]));


// Create a specified number of elements and pre-filled numeric value array
// function array_filled(n, val)
// {
//     return Array.apply(null, Array(n)).map(Number.prototype.valueOf,val);
// }

// console.log(array_filled(6, 0));
// console.log(array_filled(3, 11));


// change small to caps and vice versa 
// function change_case(txt) {
//     var str1 = "";
//     for (var i = 0; i < txt.length; i++) {
//         if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
//         else str1 += txt[i].toUpperCase();
//     }
//     return str1;
// }

// console.log(change_case("w3resource"));
// console.log(change_case("Germany"));


// find how many days in particular month 
// var getDaysInMonth = function(month,year) {
//     // Here January is 1 based
//     //Day 0 is the last day in the previous month
//    return new Date(year, month,0).getDate();
//   // Here January is 0 based
//   // return new Date(year, month+1, 0).getDate();
//   };
//   console.log(getDaysInMonth(1, 2012));
//   console.log(getDaysInMonth(2, 2012));
//   console.log(getDaysInMonth(9, 2012));
//   console.log(getDaysInMonth(12, 2012));



// hasOwnProperty examples 1 
// const matches = (obj, element) =>
//   Object.keys(element).every(key => obj.hasOwnProperty(key) && obj[key] === element[key]);
// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }));



// hasOwnProperty examples 2
// var obj = {a:1, b:2};
// var b=(obj.hasOwnProperty("a")?console.log(obj.a):console.log(null))
// console.log(b)



// filter method inside array nested json array 
// const input = [{
//     "firstName": "Kevin",
//     "lastName": "Smith",
//     "expenses": [
//       {"drink1": 26},
//       {"drink2": 20},
//       {"drink3":30}
//     ]
//   },
//   {
//     "firstName": "John",
//     "lastName": "Rambo",
//     "expenses": [
//       {"drink1": 10},
//       {"drink2": 23},
//       {"drink3":10}
//     ]
//   }
// ];

// for (let i=0;i<input.length;i++){
// const foutput = input.filter(user => Object.values(user.expenses).reduce((acc, expense) => acc + expense) < 45);
// const output = input.filter(user => user.expenses[0].drink1+user.expenses[1].drink2 < 45);
// // console.log(output[0])
// var a=[];
// for(let i=0;i<output[0].expenses.length;i++){
//     // console.log(output[0].expenses[i])
// a.push(output[0].expenses[i])
// }
// console.log(a[0])
// }


// let unwantedFieldsFilter= [
//     { 
//     userName: [ {"drink1": 10},
//     {"drink2": 20},
//     {"drink3":10}],    
//     job: ['actor'],   
//     language: ['English', 'Italian', 'Spanish', 'Greek']  
//   },
//   { 
//     userName: [ {"drink1": 50},
//     {"drink2": 70},
//     {"drink3":90}],    
//     job: ['music'],   
//     language: ['japan', 'china', 'hindi', 'malayalam']  
//   }
// ];
// console.log(unwantedFieldsFilter[1].userName)



// middl element in node  
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }  
// //   const node = new Node('secret');  
// //   console.log(node)
// const nodeOne = new Node(1);
// const nodeTwo = new Node(2);
// const nodeThree = new Node(3);
// const nodeFour = new Node(4);
// const nodeFive = new Node(5);
// nodeFour.next=nodeFive;
// nodeThree.next=nodeFour;
// nodeTwo.next = nodeThree;
// nodeOne.next = nodeTwo;
// const head = nodeOne;
// // console.log(head)
// function findMiddle(head) {
//     //write your answer here!
//     let fast = nodeOne;
//     let slow = nodeOne;

//     while(fast.next && fast.next.next) {
//       fast = fast.next.next;
//       slow = slow.next;
//     }
//     return slow;
//   }

//   console.log(findMiddle(head).data) 


// cross string 
// function cross( str, len){
// for (let i = 0; i < len; i++)
// {
//     var j = len - 1 - i;
//     for (let k = 0; k < len; k++)
//     {
//         if (k == i || k == j)
//             console.log(str[k]);
//         else
//         console.log(" ");
//     }
//     console.log("\n");
// }
// }
// // var str=["g","e","e","k","s","f","o","r","g","e","e","k","s"];
// var str="geeksforgeeks"
// var len=str.length;
// cross(str,len)



// // range between numbers integers 
// function range(start_num, end_num)
// {
//     console.log(start_num, end_num)
//   if (end_num - start_num === 2) 
//   {
//     return [start_num + 1];
//   } 
//   else 
//   {
//     var list = range(start_num, end_num - 1);    
//     list.push(end_num - 1);    
//     return list;
//   }
// };
// console.log(range(2,10));



// call back funtion 
// function addStudent(id, refreshCallback)
// {
//     refreshCallback();  
// }

// function refreshStudentList() {
//     console.log('Hello');
// }

// addStudent(1, refreshStudentList);



// // call back funtion simple
// function addStudent()
// {
//   refreshStudentList();  
// }

// function refreshStudentList() {
//     console.log('Hello');
// }

// addStudent();




// first method argument passing
// function calculate(a,b,tag){
//     if(tag=="add"){
//         return a+b;
//     }
//     if(tag=="sub"){
//         return a-b;
//     }
// }

// console.log(calculate(5,6,"sub"))



// second method argument passing
// function calculate(a,b,tag){
//     if(tag=="add"){
//         console.log( a+b);
//     }
//     if(tag=="sub"){
//         console.log( a-b);
//     }
// }

// calculate(5,6,"sub")



// function calculate(a,tag){
//     if(tag=="add"){
//         var add=0;
//         for(let i=0;i<a.length;i++){
//            add=add+a[i]
//         }
//         return add;
//     }
//     if(tag=="mul"){
//         var mul=1;
//         for(let i=0;i<a.length;i++){
//             mul=mul*a[i]
//         }
//         return mul;
//     }
// }

// console.log(calculate([1,2,3,4],"add"))



// join method 
// var a = [ 1, 2, 3, 4, 5, 6 ];
// console.log(a.join("||"))


var img="http://localhost:3000/uploads/Capture.PNG"
// var divide=img.split("uploads")
// console.log(divide)
// var concat=divide[0].concat(divide[1])
// console.log(concat)


// var email = "meme@email_1.com,him@email_2.com,her@email_3.com";
// var email_array = email.split(',');
// var new_string = email_array.join('-');
// // console.log(email_array);
// console.log(new_string);


// Date properties 
// var moment = require('moment');
// var todayDate  =new Date(2021,05,4).getDate();
// var afterfiveDays = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

// var todayDateFormat = moment(todayDate, 'DD-MM-YYYY').format('MM-DD-YYYY');
// var afterfiveDaysFormat = moment(afterfiveDays, 'DD-MM-YYYY').format('MM-DD-YYYY');

// console.log(afterfiveDays)


// console.log(new Date())


// const today = moment().startOf('day')
// console.log(today.toDate())


// console.log(new ISODate("2020-01-04"))


// find two fields 
// Customer.find({ email: /foo\.bar/, age: { $gte: 30 } });
// // Equivalent:
// Customer.find({ email: /foo\.bar/ }).find({ age: { $gte: 30 } });


// var myArray = [
//     {id:1, name:"bob"},
//     {id:2, name:"dan"},
//     {id:3, name:"barb"},
//    ]

//    // grab the Array item which matchs the id "2"

//    for(i=0;i<myArray.length;i++){
//    if(myArray[i].id!==2){
//        console.log(myArray[i].name)
//    }
// }


// filter two arrays compare using some method dont use for loop
const a1 = [ { id: 1, name: 'a1', sub: { id: 6, name: 'a1 sub' } },
 { id: 2, name: 'a2', sub: null },
 { id: 3, name: 'a3', sub: { id: 8, name: 'a3 sub' } }, 
 { id: 4, name: 'a4', sub: null },
  { id: 5, name: 'a5', sub: { id: 10, name: 'a5 sub' } }, ]; 

const a2 = [ { id: 1, name: 'a1', sub: { id: 6, name: 'a1 sub' } }, 
{ id: 2, name: 'a2', sub: null }, 
{ id: 5, name: 'a5', sub: { id: 10, name: 'a5 sub' } },
{ id: 6, name: 'a6', sub: { id: 11, name: 'a6 sub' } } ];

// const result = a1.filter(({id,sub}) => !a2.some(x => x.id == id) && sub)
const result=a1.filter(res=>!a2.some(x=>x.id==res.id)&&res.sub)

// console.log(result)



// merge objects 
// const string1  = `{
//     "name": "Todd",
//     "age": 20    
//   }`;

//   const string2 = `{
//     "languages": ["Spanish", "Portuguese"],
//     "married": true
//   }`;

//   const obj1 = JSON.parse(string1);
//   const obj2 = JSON.parse(string2);

//   const mergedObject = {
//     ...obj1,
//     ...obj2
//   };

//   console.log(JSON.stringify(mergedObject))  



// concat array 
// var jsonArray1 = [{'name': "doug", 'id':5}, {'name': "dofug", 'id':23}];
// var jsonArray2 = [{'name': "goud", 'id':1}, {'name': "doaaug", 'id':52}];
// var jsonArray3=  [{'name': "demon", 'id':2}, {'name': "jjjj", 'id':59}];
// jsonArray1 = jsonArray1.concat(jsonArray2).concat(jsonArray3);
// console.log(jsonArray1)



// filter two array insise the json objects 
// var json1 = [{id:1,name:'aaa'},{id:5,name:'ccc'},{id:3,name:'bbb'}];

// var json2 = [{id:3,parameter1:'x', parameter2:'y', parameter3:'z'},
//              {id:1,parameter1:'u', parameter2:'v', parameter3:'w'},
//              {id:5,parameter1:'q', parameter2:'w', parameter3:'e'}];

// res = json2.map(x => Object.assign(x, json1.find(y => y.id == x.id)));
// console.log(res)


// current date +1
// const Ci=(val)=>{ 
//     const tomorrow = new Date(val)
//     tomorrow.setDate(tomorrow.getDate() + 1)
//     return tomorrow.toISOString().slice(0,10)

// }



// insert named key as json push the array 
// var arrOfObj = [{
//     name: 'eve'
//   }, {
//     name: 'john'
//   }, {
//     name: 'jane'
//   }];

//   var result = arrOfObj.map(function(el) {
//     var o = Object.assign({}, el);
//     o.isActive = true;
//     return o;
//   })

//   console.log(arrOfObj);
//   console.log(result);


// value concept filter using bw prices 
// var a=[
//        {"name":"Hotel A","price":1000},{"name":"Hotel B","price":775},
//        {"name":"Hotel C","price":889},{"name":"Hotel D","price":1999},
//        {"name":"Hotel E","price":897},{"name":"Hotel F","price":676},
//        {"name":"Hotel G","price":777},{"name":"Hotel H","price":956},
//        {"name":"Hotel I","price":666},{"name":"Hotel J","price":767},
//        {"name":"Hotel K","price":897},{"name":"Hotel L","price":1987},
//        {"name":"Hotel M","price":1200},{"name":"Hotel N","price":1001},
//        {"name":"Hotel O","price":902},{"name":"Hotel P","price":891},
//        {"name":"Hotel Q","price":800},{"name":"Hotel R","price":491},
//        {"name":"Hotel S","price":456},{"name":"Hotel T","price":321},
//        {"name":"Hotel U","price":333},{"name":"Hotel V","price":230},
//        {"name":"Hotel W","price":200},{"name":"Hotel X","price":189},
//        {"name":"Hotel Y","price":999},{"name":"Hotel Z","price":111}
//      ]
// var b=[
//     [100,200],
//     [700,1200],
//   ]     
// var c=[];  
// for(var i=0;i<b.length;i++){
//     // for(var j=0;j<b[i].length;j++){
//     var record = a.filter(f=>f.price>=b[i][0] && f.price<=b[i][1])
//     c.push(record)
// // }   
// }
// console.log(c)



// function differenceOf2Arrays (array1, array2) {
//     var temp = [];
//     // array1 = array1.toString().split(',').map(Number);
//     // array2 = array2.toString().split(',').map(Number);    

//     for (var i in array1) {
//     if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
//     }
//     for(i in array2) {
//     if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
//     }
//     // console.log(temp)
//     return temp.sort((a,b) => a-b);

//     }

//     console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));




// filter indexOf 
// var arr = ["aaa", "xxx", "aaa", "xxx", "aaa"];
// var foundIn = [1, 3];
// var res = arr.filter(function (eachElem, index) {
//     return foundIn.indexOf(index) == -1
// })

// console.log(res)



// searching result 
// let search = (list, text) =>
//   list.filter(i => i.label.toLowerCase().includes(text.toLowerCase()));
// let list = [
//     { value: 0, label: 'john' },
//     { value: 1, label: 'johnny' },
//     { value: 2, label: 'peter' },
//     { value: 3, label: 'peterson' }
// ];
// let result = search(list, 'peters');
// console.log(result);



// filter in char alphabets
// var choosedOne=["a","b","c","d"];
// var available=["a","b","c","d","e","f","g"];
// var op="a"; 
// console.log(available.filter(value=>value==op || !choosedOne.includes(value)))



// filter in mullang
// let languages = [
//     {
//         value: 'tamil',
//         label: 'tamil'
//     },
//     {
//         value: 'eng',
//         label: 'eng'
//     },
//     {
//         value: 'malai',
//         label: 'malai'
//     }]
// let muli_lang = [{ lang_code: { value: "tamil" } }, { lang_code: { value: "eng" } }]

// console.log(languages.filter(f => (muli_lang.map(v => v.lang_code.value)).includes(f.value)))



// instruction of include and filter 
// 1) include()
//     abcddf  ["a","b",c] 
// let c= [{v:"a"},{v:"b"}]
// console.log(c.map(v=>v.v).includes("a"))
// console.log(c.filter(c=>c))
// 2) filter(=>)
//   filtering array 




// obejct iteration
// let cc={
//     a:"aaa",
//     b:"bbb",
//     c:'ccc'
// }
// for(let i in cc)
// {
//     console.log(cc[i])
// }



// mapping inside array of obj 
// let aa=[{a:111},{a:222},{a:3333}]
// for(let i of aa)
// {
//     console.log(i.a)
// }




// finding mobile brand name with char  "o"
// let aaa=[{name:"samsung"},{name:"oppo"},{name:"Nokia"}]
// let op=[]
//  aaa.forEach(val=>{
//      let s=val.name.toLowerCase()
//      let key ="0";
//      if(s.search(key.toLowerCase())>-1)
//      {
//          op.push(val)
//      }
//  })
//  console.log(op)




// filter array using math power concept index callback 
// function filterFn(array, diffArray, prop, propDiff) {
//     diffArray = !propDiff ? diffArray : diffArray.map(d => d[propDiff])    
//     const fn = f => diffArray.indexOf(f) === -1    
//     if (prop) {
//          return array.map(r => r[prop]).filter(fn)
//     } else {
//          return array.filter(fn)
//     }
// }
// var arr = [];
// for (var i = 0; i < 10; i++) {
//     var obj = {}
//     obj.index = i
//     obj.value = Math.pow(2, i)   
//     arr.push(obj)
// }
// var arr2 = [1, 2, 3, 4, 5]
// var sec = [{t:2}, {t:99}, {t:256}, {t:4096}]
// var log = console.log.bind(console)
// // var filtered = filterFn(arr, sec, 'value', 't')
// var filtered2 = filterFn(arr2, sec, null, 't')
// log(filtered2)




// filter hotel price using of loop method 
// var a = [
//     { "name": "Hotel A", "price": 1000 }, { "name": "Hotel B", "price": 775 },
//     { "name": "Hotel C", "price": 889 }, { "name": "Hotel D", "price": 1999 },
//     { "name": "Hotel E", "price": 897 }, { "name": "Hotel F", "price": 676 },
//     { "name": "Hotel G", "price": 777 }, { "name": "Hotel H", "price": 956 },
//     { "name": "Hotel I", "price": 666 }, { "name": "Hotel J", "price": 767 },
//     { "name": "Hotel K", "price": 897 }, { "name": "Hotel L", "price": 1987 },
//     { "name": "Hotel M", "price": 1200 }, { "name": "Hotel N", "price": 1001 },
//     { "name": "Hotel O", "price": 902 }, { "name": "Hotel P", "price": 891 },
//     { "name": "Hotel Q", "price": 800 }, { "name": "Hotel R", "price": 491 },
//     { "name": "Hotel S", "price": 456 }, { "name": "Hotel T", "price": 321 },
//     { "name": "Hotel U", "price": 333 }, { "name": "Hotel V", "price": 230 },
//     { "name": "Hotel W", "price": 200 }, { "name": "Hotel X", "price": 189 },
//     { "name": "Hotel Y", "price": 999 }, { "name": "Hotel Z", "price": 111 }
// ]
// var b = [
//     [100, 200],
//     [700, 1200],
// ]
// var c = [];
// for (let i of b) {
//     var record = a.filter(f => f.price >= i[0] && f.price <= i[1])
//     c.push(record)
// }
// console.log(c)


// filter languages using selected array 
// const data= {
//     totalRows: 0,
//     cities: [
//         {
//             row_number: 0,
//             language_desc: "Arabic(U.A.E)",
//             language_code: "ar-AE"
//         },
//         {
//             row_number: 0,
//             language_desc: "English (US)",
//             language_code: "en-US"
//         },
//         {
//             row_number: 0,
//             language_desc: "Chinese (Simplified)",
//             language_code: "zh-CN"
//         }
//     ]
// }

// let multi_lang=[{language_code:{value:"zh-CN"}},{language_code:{value:"ar-AE"}}] 

// var filterElement=data.cities.filter(f=>f.language_code==multi_lang[1].language_code.value || (!multi_lang.map(v=>v.language_code.value).includes(f.language_code)))
// // console.log(filterElement)
// console.log(filterElement.map(v=>v.language_desc))

// filter languages using selected array  2

// expilict the current indian hour 
// var dt=new Date()
// dt.setHours(dt.getHours() + 5);
// dt.setMinutes(dt.getMinutes() + 30);
// console.log(dt)


// create 2d array in index format 
// function create2DArray(rows, columns, value = (x, y) => 0) {
//     var array = new Array(rows);
//     for (var i = 0; i < rows; i++) {
//       array[i] = new Array(columns);
//       for (var j = 0; j < columns; j++) {
//         array[i][j] = value(i, j);
//       }
//     }

//     return array;
//   }

//   var array = create2DArray(5, 6, (row, column) => row + column);
//   console.log(array);




// create seats using 2d first 
// var count = 1;
// var twoArray =[];

// for (var i=0;i<2;i++)
// {
//   var data = [];
//   for (var j=0;j<25;j++)
//   {
//     data.push("seat" +" "+ count);
//     count++;
//   }

//   twoArray.push(data);
// }



// create seats using 2d second
// const createSeats = (rows, startIndex) => {
//   let i = 0;
//   let j = startIndex;
//   let k = 'A';
//   const section = [];
//   while(i < 6 && j <= rows) {
//       if(k > 'F') {
//           k = 'A';
//           j++;
//       }
//       if(j < rows + 1) {
//           section.push(j + k);         
//           k = String.fromCharCode(k.charCodeAt(0) + 1);

//       }
//   }
//   return section;

// }

// const premiumSeats = createSeats(2, '1');
// const normalSeats = createSeats(10, '3');
// console.log(premiumSeats)


// css style saragana 
// const styleConcat = (style) => {
//     var obj = {};
//     for (let i = 0; i < style.length; i++) {
//         obj = Object.assign(obj, style[i]);
//     }
//     return obj;
// }

// console.log(styleConcat([{fontSize:20},{color:"red"},{background:"black"},style={padding:30}]))



// icons filteration 
// const icons = [
//       "fab fa-stack-exchange",
//       "fab fa-stack-overflow",
//       "fas fa-star", "far fa-star",
//       "fas fa-star-half", "far fa-star-half",
//       "fab fa-staylinked",
//       "fab fa-steam",
//       "fab fa-steam-square",
//       "fab fa-steam-symbol",
//   ];

//   const icon=icons.map((val,index)=>({value:val,label:val}))
//   const IconFilter=(value)=>{
//     return icon.filter((f) => f.value == value).length ? icon.filter((f) => f.value == value)[0] : null
//   }
//   console.log(IconFilter("fab fa-steam"))



// perform ascending and descending inside array filter 
//     var data= [
//     {
//       category: 0,
//       name: "5 stars"
//     },
//     {
//       category: 4,
//       name: "2 stars"
//     },
//     {
//       category: 2,
//       name: "3 stars"
//     },
// ]
// let v=[]
// function desc(a, b) {
//   return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
//   }

//   function asc(a, b) {
//   return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
//   }

//   // DESC
//   v=data.sort((a, b) => asc(a.name, b.name));
//   console.log(v)



// vimal logics 
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
// console.log(numbers.filter(v=>v==0))



// filter and concat array 
// var data= [
//         {
//           category: 0,
//           "name-set": "5 stars",
//           flag:-1
//         },
//         {
//           category: 4,
//           "name-set": "2 stars",
//           flag:0
//         },
//         {
//           category: 2,
//           "name-set": "3 stars",
//           flag:1
//         },
//         {
//           category: 1,
//           "name-set": "1 stars",
//           flag:-1
//         },
//     ]

//    function desc(a, b) {
//   return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
//   }

//   // var v=data.sort((a, b) => desc(a.flag, b.flag));     
//   // console.log(v) 
// var firstdata=data.filter(f=>f.flag!==-1)  
// var seconddata=data.filter(f=>f.flag==-1) 
// fed=firstdata.concat(seconddata)
// console.log(fed)



// obj={
//   val:{
//     ff:"1"
//   },
//   value:{
//     f:"3"
//   }
// }

// console.log(obj.val.ff)



// filter the element using true 
// var data = [
//     {
//         category: 0,
//         "name-set": "5 stars",
//         flag: -1
//     },
//     {
//         category: 4,
//         "name-set": "2 stars",
//         flag: 0
//     },
//     {
//         category: 2,
//         "name-set": "3 stars",
//         flag: 1
//     },
//     {
//         category: 1,
//         "name-set": "1 stars",
//         flag: -1
//     },
// ]
// console.log(data.filter(v => true))





// validator purpose logics
const validator = (values) => {
    if(!values.length){
      let err = false;
      for (let obj in values) {  
        if (!values[obj]['type']) {
          if (
            typeof values[obj]['value'] != 'boolean' &&
            ((values[obj]['is_require'] && values[obj]['error']) ||
              (values[obj]['is_require'] &&
                (values[obj]['value'] == null ||
                  values[obj]['value'] == '' ||
                  (typeof values[obj]['value'] == 'string' && values[obj]['value'] && values[obj]['value'].trim() == ''))))
          ) {
            values[obj]['error'] = true;
            err = true;
          }
        }
    }
      return { values, err };
    }
    else{ 
      values=values.map(value=>validator(value))
      return ({values:values.map(f=>f.values), err:values.filter(f=>f.err).length>0})
    }
};

var localFields_validation=validator([
    {
    Email: {
        value: "",
        is_require: true,
        error: false
    },
    Password: {
        value: "",
        is_require: true,
        error: false
    },
    Con_Password: {
        value: false,
        is_require: true,
        error: false
    }
}
])

console.log(localFields_validation.err)



// split query 
// var query="http://localhost:3000/verifyEmail/?id=4NRU8ba22hSCCXSdQbpnXE8uQYfTY2po9RJEQFzeoOrXgmKUbWUeUevsmGBOFXNmVuYfmTJqwgrU9ZP+Wcpe6C58RbzVPEt7xFWdUxQAxm2M1CYYBNPLHL3ayy/47j/c/"
// let a=query.split("=")[0]
// let b=query.split("=")[1]
// let c=a.split("?id")[0]
// console.log(c+b)
