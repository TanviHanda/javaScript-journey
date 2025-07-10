const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]); //flash
// const newArr = marvel_heroes.concat(dc_heroes)
// console.log(newArr); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ] | return new arr
// const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_Array = [1,2,3,[4,5],6,7,[8,9],10]
// const real_another_array = another_Array.flat(Infinity)
// console.log(real_another_array);
//[
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
//]

// console.log(Array.isArray("tanvi"));// false
// console.log(Array.from("tanvi"));// [ 't', 'a', 'n', 'v', 'i' ]
// console.log(Array.from({name:"tanvi"})); //[] | interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3));// [ 100, 200, 300 ]


//array.of v/s array.from

// // .of 
//     const arr1 = Array.of(1, 2, 3); // [1, 2, 3]
//     const arr2 = Array.of("hello"); // ["hello"]
//     const arr3 = Array.of(undefined, null); // [undefined, null]

// // .from
// const str = "abc";
//     const arrFromStr = Array.from(str); // ['a', 'b', 'c']

//     const set = new Set([1, 2, 3]);
//     const arrFromSet = Array.from(set); // [1, 2, 3]

//     const numbers = [1, 2, 3];
//     const doubledNumbers = Array.from(numbers, x => x * 2); // [2, 4, 6]