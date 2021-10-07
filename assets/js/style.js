//wait for the DOM to finish before running game
// get the button elements and add event listeners to them
document.addEventListener("DOMcontentloaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit"){
                alert("you clicked submit!");
                }else {
                    let gametype = this.attribute("data-type");
                    alert(`You clicked ${gameType}`);
                    runGame(gameType);

                
            }
        }
    )}
       runGame("addition");
})  
/**
 * the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    // creates two numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditionalQuestion(num1,num2);
    }else {
        alert(`Unknown game type: ${gameType}`);
        throw  `Unknown game type:. Aborting!`;
    }

}
function checkAnswer(){

}
/**
 * Gets the operands (the numbers)and the operator (plus,minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){
        return [operand1 + operand2, "addition"];
    }else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionalQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}