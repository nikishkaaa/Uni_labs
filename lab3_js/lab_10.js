block = document.getElementById("block-wrapper");
result = document.getElementById('result');

function hide() {
    // console.log("hide function invoked")
    block.style.display = "none";
}

function show() {
    // console.log("show function invoked")
    block.style.display = "block";
}

let table = document.getElementById("table1");
let active = []

function pushActive(el) {
    // console.log("clicked: " + el.innerText);
    el.style.background = "red";
    active.push(el);
    // console.log("active length: ", active.length)
}

function clearActive() {
    // console.log("clear function invoked");
    for (let i = 0; i < active.length; i++) {
        // console.log("a[", i,"]: " + active[i].innerText);
        active[i].style.background = "";
    }
    active = [];
    result.innerHTML="";
}

function sum() {
    // console.log("sum function invoked");
    let sum = 0;
    let html = "";
    for (let i = 0; i < active.length; i++) {
        sum += parseInt(active[i].innerText);
    }
    console.log("sum of activated cells: ", sum);
    html += "<h3>Сума: " + sum + "</h3>";
    result.innerHTML=html;
}
