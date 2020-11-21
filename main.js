class PianoKey {
    constructor(key, note) {
        this.key = key;
        this.note = note;
    }

    play() {
        this.note.play();
    }

    pause() {
        this.note.pause();
        this.note.currentTime = 0;
    }

    press() {
        this.pause();
        this.play();
    }
}

//black-keys
let wKey = new PianoKey("W", new Audio("PianoNotes/W.mp3"));
let eKey = new PianoKey("E", new Audio("PianoNotes/E.mp3"));
let tKey = new PianoKey("T", new Audio("PianoNotes/T.mp3"));
let yKey = new PianoKey("Y", new Audio("PianoNotes/Y.mp3"));
let uKey = new PianoKey("U", new Audio("PianoNotes/U.mp3"));

//white-keys
let aKey = new PianoKey("A", new Audio("PianoNotes/A.mp3"));
let sKey = new PianoKey("S", new Audio("PianoNotes/S.mp3"));
let dKey = new PianoKey("D", new Audio("PianoNotes/D.mp3"));
let fKey = new PianoKey("F", new Audio("PianoNotes/F.mp3"));
let gKey = new PianoKey("G", new Audio("PianoNotes/G.mp3"));
let hKey = new PianoKey("H", new Audio("PianoNotes/H.mp3"));
let jKey = new PianoKey("J", new Audio("PianoNotes/J.mp3"));

document.addEventListener("keypress", function(event) {
    switch (event.code) {
        //black keys
        case "KeyW":
            wKey.press();
            break;
        case "KeyE":
            eKey.press();
            break;
        case "KeyT":
            tKey.press();
            break;
        case "KeyY":
            yKey.press();
            break;
        case "KeyU":
            uKey.press();
            break;
        //white keys
        case "KeyA":
            aKey.press();
            break;
        case "KeyS":
            sKey.press();
            break;
        case "KeyD":
            dKey.press();
            break;        
        case "KeyF":
            fKey.press();
            break;
        case "KeyG":
            gKey.press();
            break;
        case "KeyH":
            hKey.press();
            break;
        case "KeyJ":
            jKey.press();
            break;
        default:
            console.log("Undefined Key");
            break;
    }
});