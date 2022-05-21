var animals = [
    {
        name: 'Julie',
        species: 'Dog'
    },
    {
        name: 'Timmy',
        species: 'Cat'
    },
    {
        name:'Jacky',
        species: 'Dog'
    }
]
var dogs = animals.filter(function(animal) {
    return animal.species === 'Dog'
})
