function talk() {
    console.log(this.sound);
}

let me = {
    sound: 'Hello....'
}
talk(); // undefined - sound is a global variable
let talkBoungToMe = talk.bind(me);
talkBoungToMe();