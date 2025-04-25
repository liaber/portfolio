const words = ["an innovator", "a problem-solver", "a creative thinker", "a lifelong learner", "an adaptable", "a critical thinker", "a leader", "a creator", "a self-starter", "a connector", "a mentor", "a team-player", "a tech enthusiast", "a problem-solver", "a change-maker", "a software developer", "a ux/ui designer", "an ai enthusiast"];
const cursorTarget = document.getElementById("type-target");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let timoutSet = false;

function loop() {
    timeoutSet = false;
    if (deleting){
        charIndex--;
        if (charIndex == 0) {
            deleting = false;
            wordIndex++;
            if (wordIndex == words.length) {
                wordIndex = 0;
            }
            timeoutSet = true;
            setTimeout(loop, 300);
        }
    }

    else if (!deleting) {
        charIndex++;
        if (charIndex == (words[wordIndex].length)) {
            deleting = true;
            timeoutSet = true;
            setTimeout(loop, 1000);
        }
    }

    if (!timeoutSet) {
        setTimeout(loop, 100);
    }
    
    cursorTarget.innerHTML = words[wordIndex].substring(0, charIndex);
}

loop();
