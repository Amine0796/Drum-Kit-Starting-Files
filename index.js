let numberOfDrumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrumButtons.length; i++) {
    numberOfDrumButtons[i].addEventListener("click",function (){
        let btnInnerHtml = this.innerHTML;
        switch (btnInnerHtml) {
            case "w":
                    var audio1 = new Audio("sounds/tom-1.mp3");
                        audio1.play();
                break;
            
            case "a" :
                    var audio2 = new Audio("sounds/tom-2.mp3");
                        audio2.play();
                break;
            case "s" :
                    var audio3 = new Audio("sounds/tom-3.mp3");
                        audio3.play();
                break;
            case "d" :
                    var audio4 = new Audio("sounds/tom-4.mp3");
                        audio4.play();
                break;
            case "j" :
                    var audio5 = new Audio("sounds/snare.mp3");
                        audio5.play();
                break;
            case "k" :
                    var audio6 = new Audio("sounds/crash.mp3");
                        audio6.play();
                break;
            case "l" :
                    var audio7 = new Audio("sounds/kick-bass.mp3");
                        audio7.play();
                break;
            default:
                break;
        }
    });
    
}
function handleKeyPress(event) {
    switch (event.key) {
        case "w":
                var audio1 = new Audio("sounds/tom-1.mp3");
                    audio1.play();
                    btnAnimation(event.key);
            break;
        
        case "a" :
                var audio2 = new Audio("sounds/tom-2.mp3");
                    audio2.play();
                    btnAnimation(event.key);

            break;
        case "s" :
                var audio3 = new Audio("sounds/tom-3.mp3");
                    audio3.play();
                    btnAnimation(event.key);

            break;
        case "d" :
                var audio4 = new Audio("sounds/tom-4.mp3");
                    audio4.play();
                    btnAnimation(event.key);

            break;
        case "j" :
                var audio5 = new Audio("sounds/snare.mp3");
                    audio5.play();
                    btnAnimation(event.key);

            break;
        case "k" :
                var audio6 = new Audio("sounds/crash.mp3");
                    audio6.play();
                    btnAnimation(event.key);

            break;
        case "l" :
                var audio7 = new Audio("sounds/kick-bass.mp3");
                    audio7.play();
                    btnAnimation(event.key);

            break;
        default:
            break;
    }
}
document.addEventListener("keydown",handleKeyPress);

function btnAnimation(currentKey) {
    let activeBtn = document.querySelector(`.${currentKey}`);
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);
}



