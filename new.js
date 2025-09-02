// console.log("hello")
// string a="4"
// Number a= 5
// null=

// var a false

// console.log()
// var a=5
// var a=6

// let a=6
// a=6
// const a=6
// console.log(c);

// let firstName='srk'
// let lastName='khan'
// console.log (`${firstName }${lastName}`)
// //  let Firs_tName
// console.log( firstName+"   " + lastName);
// const b=536646664;
// console.log(b)
// let a=false
// console.log(a)
// let=5
// let==5
// =vs ==vs ===
// console.log(false==0);
// console.log(5==5)
// console.log(5==='5')
// var a=null
// console.log(a);
// var arr=[1,2,3,4,5,6,'string']
// console.log(arr[4]);
// for(let i =0;i<5:i++)
// for(let i in arr){
//     console.log(i)
// }
// for(let i of arr){
//     console.log(i)
// }
// let a=98
// let c=20
// // if(a>90 && c==20) {
//    if( a>90 || c==20) {

//     console.log('A');
// }
// else if(a>85){
//     console.log(B);
// }
// else if(a>70){
//     console.log(C);
// }
// else{
//     console.log(byee);
// }

// let b=true
// b?console.log( true):console.log( 'false')
            

// function

// function add(){
//     console.log('hello')
// // return 'hello'
// }
// add()
// add()
// const add=() => {
//     console.log('hii tushar bhai');

// }
// add()

// const addd=() =>{
//     console.log('heee')
// }
// add()
// function add( a,b){
//     console.log(a+b);
//     return'5'
//     console.log()
// }
// // add(5,6)
// let a= add()
// console.log(a);
// let add=(a,b)=> a+b
// console.log( add(5,6));
// let arr=[12,3,4,5,66,8]
// // arr.pop()
// // arr.push(8)
// arr.shift()
// arr.unshift(400)
// // console.log(arr);
// console.log(arr.length);
// console.log( arr.includes(5))

// Object
// let a={
//     id:10,
//     firstName:'hello',
//     isPass:true
// }
// a.id

// function sum(a){
//     console.log('${a.name} $(a.lastName');
// }
// let obj={
//     id:1,
//     name:"hello",
//     lastName:"hii"
// }
// sum(obj)
// obj.id=10



// function cal(num1,num2){
//     let obj={
//         sum:num1+num2,
//         minus:num1-num2,
//         multi:num1*num2,
//     }
//     return obj
// }
// let a= cal(5,6)
// // console.log(a.sum);
// console.log(a)


// let obj={
//     a:10,
//     b:40,
//     sum:function(){
//         console.log(this,"yeha peee");
//         return this.a+this.b
//     }
// }
// console.log(obj.sum());

// // var a
// // console.log(a)
 
// function sum{
//     console.log{}
// }

let canvas= document.querySelector('canvas')
let pen = canvas.getContext("2d")
pen.fillStyle="green"

 pen.fillRect(50,100,50,50)
 pen .clearRect()
let cell=50
let scell=[[0,0]]
let direction='right'

document.addEventListener('keydown',(e)=>{

    if(e.key==='ArrowDown'){
        direction='down'
    }

    else if(e.key==='Aroowleft'){
    
        direction='left'
    }

    else if(e.key==='AroowUp'){
    
        direction='up'
    }

    
    else {
    
        direction='right'
    }

})

function draw(){

     pen.clearRect(0,0,1200,600)

    for(let i of scell){
        pen.fillStyle='red'
        pen .fiilRect(i[0],i[1],cell,cell)
    }
}

draw()
function update(){
    let headx=scell[scell.length-1][0]
    let heady=scell[scell.length-1][1]

     let newHeadx
      let newHeady

   
    if(direction==='up'){
        newHeadx=headx
        newHeady=heady-cell;
    }

   else if(direction==='left'){
        newHeadx=headx - cell;
        newHeady=heady;
    }

    else if(direction==='down'){
        newHeadx=headx;
        newHeady=heady+cell;
    }

else {
    newHeadx=headx + cell;
    newHeady=heady
}
    
     
    scell.push([newHeadx,newHeadx])
    scell.shift()
}
setInterval(()=>{
    draw()
update()
},100)


