import jsonFile from './json.js';
import * as myClasses from './className.js';
import testTaken from './testTaken.js';


// selected items
const testTakenBoard = document.querySelector(".tests-detail");
const continueButton = document.querySelector(".continue");
const scoreText = document.querySelector(".score-text");


// merging data and classes to be one
let completeData = jsonFile.map(file => {
    return {...file, ...myClasses};
})

// get the html structure to be added to the dom (document object model)
completeData = completeData.map(data => {
    return testTaken(data);
})

// add it to the dom (document object model) with function
window.addEventListener("DOMContentLoaded", () => {
    testTakenBoard.innerHTML = completeData.join("");
    setTimeout(() => callingTestBlocks("show"), 5000);
})

// what happens when we click the continue button
continueButton.addEventListener("click", () => {
    let mainScores = [...document.querySelectorAll(".main-score")], average = 0;

    callingTestBlocks("hide"); // hide the current score

    mainScores.forEach(scores => {
        let score = Math.floor(Math.random() * 100); // get random scores
        average += score; // update the average value
        scores.textContent = score; // update dom elements text content
    })

    // update the average and dom elements
    setTimeout(() => {
        callingTestBlocks("show");
        average /= mainScores.length;
        let controlVariable = 0;
        let timeInterval = setInterval(()=>{
            scoreText.textContent = ++controlVariable;
            controlVariable >= average && clearInterval(timeInterval);
        }, 30)
    }, 3000);
})

// function to call different test taken
function callingTestBlocks(action) {
    const test = [...document.querySelectorAll(".test")];
    action === "show" ? test.forEach(testBlock => testBlock.classList.add("active")) : test.forEach(testBlock => testBlock.classList.remove("active"));
}
