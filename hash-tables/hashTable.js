// Find ids from one array to another.
// const favoritePets = [{ 
//     id: 123, name: 'Wacky',
// }, {
//     id: 45, name: 'Daisy',
// }, {
//     id: 345, name: 'Neezer',
// }, {
//     id: 13, name: 'Shane'
// }];

// const favoriteThings = [{
//     id: 13, name: 'Playstation',
// }, {
//     id: 45, name: 'Daily',
// }, {
//     id: 87, name: 'Computer'
// }];

// // Do any of the objects in favoritePets exist in favoriteThings based on ID.
// const table = {};
// favoritePets.forEach(pet => table[pet.id] = pet.name)

// const item = favoriteThings.find(thing => table[thing.id])

// console.log(item);

//////////////// DUPLICATE NUMBERS //////////////////////
/**
 * A function to find duplicate numbers in an array.
 * @param {number[]} numArray 
 */

// const findDuplicates = (numArray) => {
//     const table = {};
//     const dups = [];
//     numArray.forEach(number => {
//         if(table[number]) {
//             table[number] = table[number] + 1;
//             dups.push(number)
//         }
//         table[number] = 1;
//     });
//     return dups
// }

// const nums = [4, 3, 2, 7, 8, 2, 3, 1];

// const dups = findDuplicates(nums);

// console.log(dups);