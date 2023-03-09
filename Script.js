let changeEL = document.getElementById("count-el");

let val = 0
function myfunc(){
    val = val + 1
    changeEL.innerText = val
};

function mysave(){
    console.log(val)
};