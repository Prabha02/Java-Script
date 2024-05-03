//3.if else
var mark=40
if(mark>35){
    console.log('Pass')
}
else{
    console.log('Fail')
}

//4.reverse
for(i=9;i>=1;i--){
    console.log(i)
}

//7.do while 
let j=1
do{
    console.log(j)
    j++
}while(j<=5)

//8.reverse name using function
var firstName='Prabha'
var rev=firstName.split('').reverse().join('')
console.log(rev)

//9.class eg
class books{
    name(){
        return 'Author'
    }
    releseDate(){
        return '2/2/2022'
    }
}

//11.map
var a=[1,2,3,4,5]
var b=a.map((val=>val*2))
console.log(b)

//13.sort/accenting order
var city=['alanthur','mogapair','Annanagar','sowkarpet']
var a=city.sort()
console.log(a)

//14.concat
let A='He IS very polite'
let B='Got the quality from this parents'
let c='He secured first rank in school'
console.log(A+'.'+B+'.'+ C +'.')

//
