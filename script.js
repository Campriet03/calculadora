function Suma(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = parseInt(a) + parseInt(b);
    document.getElementById("r").innerText = c;
}

function Resta(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = parseInt(a) - parseInt(b);
    document.getElementById("r").innerText = c;
}

function Multiplicacion(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = parseInt(a) * parseInt(b);
    document.getElementById("r").innerText = c;
}

function Division(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = parseInt(a) / parseInt(b);
    document.getElementById("r").innerText = c;
}