let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
    console.log(count);
}

function decrease() {
    count -= 1;
    countEl.innerText = count;
    console.log(count);
}

function save() {
    let countStr = count + " | ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

function reset() {
    saveEl.textContent = 'Previous entries: ';
    countEl.textContent = 0;
    count = 0;
}