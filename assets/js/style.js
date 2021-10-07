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

function runGame(){

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