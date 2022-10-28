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

const { trace } = require("console");

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

//////////////////// TWO SUMS PROBLEM /////////////////////////
/**
 * Returns the index of the two elements that sum to a particular target.
 * // [2, 7, 11, 15] with target 9 should produce [0, 1]
 */
const twoSums = (numsArray, target) => {
    const table = {};
    const indexes = [];

    // Store each complement and it's index into a hashtable.
    numsArray.forEach((num, index) => {
        table[target - num] = index;
    });

    // Pull out all the complements into an array of numbers.
    const complements = Object.keys(table).map(str => parseInt(str));

    // Loop through the original array and return the two numbers if they sum to the target.
    numsArray.forEach((num, index) => {
        if(complements.includes(num) && indexes.length === 0 && index !== table[num]) {
            indexes.push(index, table[num])
        }
    })

    return indexes;
}

const nums = [2, 7, 11, 15];
const target = 9;

const nums2 = [3, 2, 4];
const target2 = 6;

const nums3 = [-1, 0];
const target3 = -1

console.log(twoSums(nums, target));
console.log(twoSums(nums2, target2));
console.log(twoSums(nums3, target3));