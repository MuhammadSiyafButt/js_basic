const arr1=[2,3,4,5,6]
const arr2=["siyaf","shayan","saif"]
console.log(arr1)
console.log(arr2)
//add sum number 
console.log(arr1.includes(7))
//check any number on index
console.log(arr1.indexOf(19))
// arr1 convert into string but in new array
const newarr = arr1.join()
console.log(arr1);
console.log(newarr);
console.log(typeof newarr);
//slice and splice
console.log("A ",arr1 )
const slicearray = arr1.slice(1,3)//1-3 are index but 3 is not include 
console.log( slicearray)
console.log("B ",arr1 )
console.log("                  ")
console.log("c ",arr1 )
const splice=arr1.splice(1,3)//but here there is some changes in out put in original array
console.log( splice)
console.log("d ",arr1 )