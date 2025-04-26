const words = ["a maker", "a leader", "a coder", "a builder", "a thinker", "an artist", "a writer", "a mentor", "a student", "a helper"];
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
