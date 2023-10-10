var repeat= "";

for(var i=1; i<=80; i++){
    var num= Math.floor(Math.random()*10)
    repeat += `<div class="bubble">${num}</div>`
}

document.querySelector(".down").innerHTML=repeat;