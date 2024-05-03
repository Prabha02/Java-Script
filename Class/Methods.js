//Slice  
var mark=[1,2,3,4,5]
var a=mark.slice(0,3)
console.log(a)

//splice
var score=[10,20,30,40,50,60]
score.splice(1,3,70)
console.log(score)

//push
var run=[10,20,30,40,50,60]
run.push(85)
console.log(run)

//pop
var arr=[90,80,70,60,50,40]
arr.pop()    //cut single element only
console.log(arr)

//includes doubt
let c=[90,80,70,60,50,40]
// console.log(f)
if(c.includes(90))
{
    console.log('Value is there.')
}
else{
    console.log('value is not there')
}

//split  doubt
let d="What are you doing?"
let v=d.split("")
console.log(v)

//sort  it will accenting order
// let fruits=['banana','apple','orange','mango']
let fruits=['y','c','f','i','a','w','k']
fruits.sort()
console.log(fruits)

//map  will modify each and every value of array to new value
let marks=[40,50,60,20]
var g=marks.map(marks=>marks+2)
console.log(g)

//shift remove the first element the array and return

var m=[40,50,60,75,85,90]
var z=m.shift()
console.log(m)

//unshift  // push the new value first element of the array
var m=[40,50,60,75,85,90]
var h=m.unshift(555)
console.log(m)

//Array value modification
var val=[10,20,30,40,50,60]
val[3]=25
console.log(val)

//filter 
var l=[40,50,60,75,85,90]
var n=l.filter(l=>l%3==0)
console.log(n)
 
//concate  two or more elements 
let firstName="Technologies"
let year1= 2030

console.log(firstName+" are more important in "+year1)

//trim remove the first white space
// let y=" 1, 2, 3, 4,5"
let y=" Prabha"
console.log(y.trim())

// reduce
 var a=[1,2,3,4,5]
 var b=a.reduce((a,b)=>a+b,0)
 console.log(b)


