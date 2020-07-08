// Your code goes here
let color = 0;

const header = document.querySelector("header");
header.addEventListener("mouseover", (evt) => {
    evt.target.style.color = "white";
    evt.target.style.border = "1px solid pink";
});

document.addEventListener("keydown", (evt) => { if(evt.key === "a"){
    let inputer = document.createElement("input"); 
    let type = document.createElement("p");
    inputer.id = "inputer"; 
    type.id = "typer"
    header.appendChild(inputer);
    header.appendChild(type);

    const typer = document.querySelector("#typer");
    const selected = document.querySelector("#inputer");

    selected.addEventListener("select", () => { })
    selected.addEventListener("input", (evt) => {typer.textContent = evt.target.value;});
}})
let foot = document.querySelector("footer");
foot.addEventListener("mouseout", textColorChange)
function textColorChange(event) {
    event.target.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (color.length < 7) color += "0";
}

let body = document.querySelector("body");
body.addEventListener("wheel", textColorChange)

window.addEventListener("load", () => {console.log("I loaded");})

const double = document.querySelectorAll("img");
double.forEach(item => {
    item.addEventListener("dblclick", (evt) => {evt.target.style.border = "10px solid black"})
});

window.addEventListener("resize", () => {
    let bigBox = document.querySelector(".container.home");
    bigBox.remove(); 
    header.remove();
    foot.remove();
    let snapped = document.createElement("h1");
    snapped.textContent = "You just Thanos Snapped the whole page...";
    body.appendChild(snapped);

})

function backgroundColorChange() {
    body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener("scroll", () => {backgroundColorChange()});

let navA = document.querySelectorAll(".nav-link");
console.log(navA);
navA.forEach( (evt) => evt.addEventListener("click", (evt) => {evt.preventDefault()} ) );
