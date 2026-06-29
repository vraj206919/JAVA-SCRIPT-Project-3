let arr = [];


let result = document.getElementById("resultBox");
let arrayBox = document.getElementById("arrayBox");


function createInputs() {

    let size = document.getElementById("sizeBox").value;
    let html = "";

    for (let i = 0; i < size; i++) {
        html += `<input type="number" class="num" placeholder="Value ${i + 1}"><br>`;
    }

    document.getElementById("inputBox").innerHTML = html;
}


function createArray() {

    arr = [];
    let inputs = document.getElementsByClassName("num");

    for (let i = 0; i < inputs.length; i++) {
        arr.push(Number(inputs[i].value));
    }

    arrayBox.innerText = arr;
}


function showLength() {
    result.innerText = "Length: " + arr.length;
}


function sortArray() {
    arr.sort((a, b) => a - b);
    arrayBox.innerText = arr;
}


function reverseArray() {
    arr.reverse();
    arrayBox.innerText = arr;
}


function maxValue() {
    result.innerText = "Max: " + Math.max(...arr);
}


function minValue() {
    result.innerText = "Min: " + Math.min(...arr);
}


function sumArray() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    result.innerText = "Sum: " + sum;
}


function avgArray() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    result.innerText = "Average: " + (sum / arr.length);
}


function pushValue() {
    let v = Number(prompt("Enter Value"));
    arr.push(v);
    arrayBox.innerText = arr;
}


function popValue() {
    arr.pop();
    arrayBox.innerText = arr;
}


function shiftValue() {
    arr.shift();
    arrayBox.innerText = arr;
}


function unshiftValue() {
    let v = Number(prompt("Enter Value"));
    arr.unshift(v);
    arrayBox.innerText = arr;
}


function sliceArray() {
    result.innerText = arr.slice(1, 3);
}


function spliceArray() {
    arr.splice(2, 1);
    arrayBox.innerText = arr;
}

function joinArray() {
    result.innerText = arr.join("-");
}


function concatArray() {
    result.innerText = arr.concat([100, 200]);
}


function indexOfValue() {
    let v = Number(prompt("Enter Value"));
    result.innerText = arr.indexOf(v);
}


function includesValue() {
    let v = Number(prompt("Enter Value"));
    result.innerText = arr.includes(v);
}


function findValue() {
    let v = Number(prompt("Enter Value"));
    result.innerText = arr.find(x => x == v);
}


function findIndexValue() {
    let v = Number(prompt("Enter Value"));
    result.innerText = arr.findIndex(x => x == v);
}


function mapArray() {
    result.innerText = arr.map(x => x * 2);
}

function filterEven() {
    result.innerText = arr.filter(x => x % 2 == 0);
}


function filterOdd() {
    result.innerText = arr.filter(x => x % 2 != 0);
}


function reduceArray() {
    let sum = arr.reduce((a, b) => a + b, 0);
    result.innerText = "Reduce Sum: " + sum;
}