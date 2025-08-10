var c1 = 0
var c2 = 0
modal = false

function punto(player){
    if (player == "p1"){
        c1= c1 + 1;
        document.getElementById("p1").innerHTML = c1;
    }
    else{
        c2 = c2 + 1
        document.getElementById("p2").innerHTML = c2;
    }
}

function noPunto(player){
    if (player == "p1"){
        c1-=1
        document.getElementById("p1").innerHTML = c1;
    }
    else{
        c2-=1
        document.getElementById("p2").innerHTML = c2;
    }
}

function reset(){
        c1 = 0
        document.getElementById("p1").innerHTML = c1;
        c2 = 0
        document.getElementById("p2").innerHTML = c2;
}

function modal(){
    if (modal){
        document.getElementById("modal").classList.add("invisible");
    }else{
        document.getElementById("modal").classList.remove("invisible")
    }
}

document.getElementById("p1").innerHTML = c1;
document.getElementById("p2").innerHTML = c2;

