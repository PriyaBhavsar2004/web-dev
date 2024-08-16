

// const mybutton= document.getElementById("mybutton");

// mybutton.onclick( )=>{
//     document.body.style.backgroundColor = "Black";
// } 
// ) 
document.getElementById("mybutton");
function nightMode(){
    // document.body.style.backgroundColor = "Black";
    // document.getElementById("text").style.color="white";

if(document.body.style.backgroundColor == "black"){
    document.body.style.backgroundColor = "white";
    document.getElementById("text").style.color="black";
    document.getElementById("mybutton").innerHTML="🌙";
}
else{
    document.body.style.backgroundColor = "black";
    document.getElementById("text").style.color="white";
    document.getElementById("mybutton").innerHTML="☀️";

}
}

 

 