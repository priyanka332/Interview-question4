const input = document.querySelector(".input");
const Btn1 = document.querySelector(".btn1");
const Btn2 = document.querySelector(".btn2");
const Btn3 = document.querySelector(".btn3");
const output = document.querySelector(".output");

function clickBtn1() {
    input.style = "color:red"
}

function clickBtn2() {
    input.style = "color:green"
}

function clickBtn3() {
    input.style = "color:blue"
}

Btn1.addEventListener("click", clickBtn1);
Btn2.addEventListener("click", clickBtn2);
Btn3.addEventListener("click", clickBtn3);