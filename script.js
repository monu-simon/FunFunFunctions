let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound);
    }
}

let cat = {
    sound: 'Meoww'
}

dog.talk();

let talkFunction = dog.talk;
let boundFunction = talkFunction.bind(cat);
boundFunction();