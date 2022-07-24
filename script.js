function talk() {
    console.log(this)
    console.log(this.sound)
}

let animal = {
    talk: talk
}

let dog = {
    sound: 'Woof'
}

let husky = {
    howl: function() {
        console.log(this.sound.toUpperCase());
    }
}

Object.setPrototypeOf(dog, animal); // Sets the property of animal to cat
animal.talk = function() { //We are changing the talk property after setting it to dog
    console.log('Changing the talk function.')
}
dog.talk(); //Will output 'Changing the talk function' since a refrence is only kept. We are not creating a new function or anything
Object.setPrototypeOf(husky, dog); //Deligation
husky.howl()