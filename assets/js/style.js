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
                    alert(`You clicked ${gametype}`);

                
            }
        }
    )}
        
})  
/**
 * the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    // creates two numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}
function checkAnswer(){

}
function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionalQuestion(){

}
function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}