class PianoKey {
    //constructor for each key object
    constructor(key, isWhite, note, documentElement) {
        this.key = key;//which key is represented
        this.isWhite = isWhite;//type of key is white or black
        this.note = note;//audio object associated with key
        this.element = documentElement;//DOM element associated with key
    }

    //display to the user this key was selected
    select() {
        this.element.style.backgroundColor = "green";
    }

    //display to the user this key is no longer selected
    deselect() {
        if (this.isWhite) {
            this.element.style.backgroundColor = "white"
        } else if (!this.isWhite) {
            this.element.style.backgroundColor = "black";
        }
    }

    //play the audio file associated with the key
    play() {
        this.note.play();
    }

    //stop the audio file
    pause() {
        this.note.pause();
        this.note.currentTime = 0;//allow for the audio to be restarted immediately
    }

    //interrupt the note if it's already playing and then restart the audio
    press() {
        this.pause();
        this.play();
    }
}

//create variables for each playable key
//black-keys
let wKey = new PianoKey("W", false, new Audio("PianoNotes/W.mp3"), document.getElementById("W"));
let eKey = new PianoKey("E", false, new Audio("PianoNotes/E.mp3"), document.getElementById("E"));
let tKey = new PianoKey("T", false, new Audio("PianoNotes/T.mp3"), document.getElementById("T"));
let yKey = new PianoKey("Y", false, new Audio("PianoNotes/Y.mp3"), document.getElementById("Y"));
let uKey = new PianoKey("U", false, new Audio("PianoNotes/U.mp3"), document.getElementById("U"));

//white-keys
let aKey = new PianoKey("A", true, new Audio("PianoNotes/A.mp3"), document.getElementById("A"));
let sKey = new PianoKey("S", true, new Audio("PianoNotes/S.mp3"), document.getElementById("S"));
let dKey = new PianoKey("D", true, new Audio("PianoNotes/D.mp3"), document.getElementById("D"));
let fKey = new PianoKey("F", true, new Audio("PianoNotes/F.mp3"), document.getElementById("F"));
let gKey = new PianoKey("G", true, new Audio("PianoNotes/G.mp3"), document.getElementById("G"));
let hKey = new PianoKey("H", true, new Audio("PianoNotes/H.mp3"), document.getElementById("H"));
let jKey = new PianoKey("J", true, new Audio("PianoNotes/J.mp3"), document.getElementById("J"));

//play corresponding key when the user presses a defined key
document.addEventListener("keypress", function(event) {
    let currentKey = null;
    switch (event.code) {
        //black keys
        case "KeyW":
            currentKey = wKey;
            break;
        case "KeyE":
            currentKey = eKey;
            break;
        case "KeyT":
            currentKey = tKey;
            break;
        case "KeyY":
            currentKey = yKey;
            break;
        case "KeyU":
            currentKey = uKey;
            break;
        //white keys
        case "KeyA":
            currentKey = aKey;
            break;
        case "KeyS":
            currentKey = sKey;
            break;
        case "KeyD":
            currentKey = dKey;
            break;        
        case "KeyF":
            currentKey = fKey;
            break;
        case "KeyG":
            currentKey = gKey;
            break;
        case "KeyH":
            currentKey = hKey;
            break;
        case "KeyJ":
            currentKey = jKey;
            break;
        default:
            console.log("Undefined Key Press");
            break;
    }
    if (currentKey != null) {//perform function if the key is defined
        currentKey.select();
        currentKey.press();
    }
});

//execute function when the corresponding key is no longer pressed
document.addEventListener("keyup", function(event) {
    let currentKey = null;
    switch (event.code) {
        //black keys
        case "KeyW":
            currentKey = wKey;
            break;
        case "KeyE":
            currentKey = eKey;
            break;
        case "KeyT":
            currentKey = tKey;
            break;
        case "KeyY":
            currentKey = yKey;
            break;
        case "KeyU":
            currentKey = uKey;
            break;
        //white keys
        case "KeyA":
            currentKey = aKey;
            break;
        case "KeyS":
            currentKey = sKey;
            break;
        case "KeyD":
            currentKey = dKey;
            break;        
        case "KeyF":
            currentKey = fKey;
            break;
        case "KeyG":
            currentKey = gKey;
            break;
        case "KeyH":
            currentKey = hKey;
            break;
        case "KeyJ":
            currentKey = jKey;
            break;
        default:
            console.log("Undefined Key Up");
            break;
    }
    if (currentKey != null) {//perform function if the key is defined
        currentKey.deselect();
    }
});