let canvas= document.querySelector('canvas')
let pen = canvas.getContext("2d")
pen.fillStyle="green"

//  pen.fillRect(50,100,50,50)

//  pen .clearRect()
let cell=50
let scell=[[0,0]]
let direction='right'

document.addEventListener('keydown',(e)=>{

    if(e.key==='ArrowDown'){
        direction='Down'
    }

    else if(e.key==='Aroowleft'){
    
        direction='left'
    }

    else if(e.key==='AroowUp'){
    
        direction='up'
    }

    
    // else {
    
    //     direction='right'
    // }

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
    
     
    scell.push([newHeadx,newHeadY])
    scell.shift()
}
setInterval(()=>{
    draw()
update()
},200)