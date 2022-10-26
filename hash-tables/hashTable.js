const favoritePets = [{ 
    id: 123, name: 'Wacky',
}, {
    id: 45, name: 'Daisy',
}, {
    id: 345, name: 'Neezer',
}, {
    id: 13, name: 'Shane'
}];

const favoriteThings = [{
    id: 13, name: 'Playstation',
}, {
    id: 45, name: 'Daily',
}, {
    id: 87, name: 'Computer'
}];

// Do any of the objects in favoritePets exist in favoriteThings based on ID.
const table = {};
favoritePets.forEach(pet => table[pet.id] = pet.name)

const item = favoriteThings.find(thing => table[thing.id])

console.log(item);