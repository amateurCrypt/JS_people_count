
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
// 1. Grab the save-el paragrah and store it in a variable called saveEl

let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let count = 0;

function increment () {
    count += 1; 
    countEl.innerText = count;
}

function reduction () {
    count -= 1;
    countEl.innerText = count;

}

function save() {
    console.log(count)
}

function save() {
    let para = count + " - ";
    saveEl.textContent += para;
    console.log(count)
}