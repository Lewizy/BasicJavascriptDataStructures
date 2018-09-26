const log = console.log;

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
 
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
   let row = [];/* <-----  row has been declared inside the outer loop. 
   Now a new row will be initialised during each iteration of the outer loop allowing 
   for the desired matrix. */
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);//if you wanted to add other values change the zero
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//UNSHIFT AND PUSH METHODS (which add to beggining and end of arrays)
let myArrayChange = ["a", "b", "c", "d"];
myArrayChange.unshift("addToBeginningOfArray");//beginning
myArrayChange.push("addToEndOfArray")//end
log(myArrayChange)// [ 'addToBeginningOfArray', 'a', 'b', 'c', 'd', 'addToEndOfArray' ]

//SHIFT AND POP METHOD (which removes from beginning and end of array)

function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
  }
  // do not change code below this line
  console.log(popShift(['challenge', 'is', 'not', 'complete']));//challenge complete

let popShift2 = ["start"," middle"," end"];
let removeStart = popShift2.shift();//start
let removeEnd = popShift2.pop();//end
log(popShift2)//middle


//SPLICE MEHOD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var array = [1,2,3,4]
var item = 3

var index = array.indexOf(item);
if (index !== -1) array.splice(index, 1);

console.log(array)

let arraySplice = ['today', 'was', 'not', 'so', 'great'];
arraySplice.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']

let arraySplice2 = ['I', 'am', 'feeling', 'really', 'happy'];
let newArraySplice = arraySplice2.splice(3, 2);
// newArray equals ['really', 'happy']

function sumOfTen(arr) {
    // change code below this line
    arr.splice(1,2);
    // change code above this line
    return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));//10

//Replacing values with splice

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

function replaceCartoons (arr){
  arr.splice(1,1,"Jerry");
  return arr;
}
log(replaceCartoons(["Morty","Rick","Mr. Noob Noob","Mr. Poopy B-Hole"]));
//[ 'Morty', 'Jerry', 'Mr. Noob Noob', 'Mr. Poopy B-Hole' ]


function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}
let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];
colorScheme = colorChange(colorScheme, 2, '#332327');
// we have removed '#bb7e8c' and added '#332327' in its place
// colorScheme now equals ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']

function htmlColorNames(arr) {
  arr.splice(0,2,"DarkSalmon","BlanchedAlmond");
  return arr;
} 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

// SLICE METHOD EXTRACTS FROM ARRAY ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// first parameter starts index second ends with , array stays intact.

let sliceWord = ["beginning","unwanted","notNeeded","middle","end"];//Array stays intact 
let extractWords = sliceWord.slice(1,3);
log(extractWords)//[ 'unwanted', 'notNeeded' ]

function forecast(arr) {
  arr.slice(2,4);// Not modefied, only extracts data
  arr = arr.slice(2,4) // Array is modefied
  return arr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}
// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

//

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning',...fragment,'is', 'fun']; // change this line
  return sentence;
}
console.log(spreadOut());



//Check For The Presence of an Element With indexOf()///////////////////////////////////////////////////////////////////////////////////function 

function quickCheck(arr, elem) {
  if(arr.indexOf(elem) > 0 || arr.indexOf(elem) !== -1){
    return true;
  }else{ return false; }
}
// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
 for(let i = 0; i < arr.length; i++) {
   if(arr[i].indexOf(elem) < 0 ){
     newArr.push(arr[i]);
    } 
  }
  // change code above this line
  return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
  // if(users.hasOwnProperty("Alan","Jeff","Sarah","Ryan")){
  //   return true;
  // }else{return false};
  
  if("Alan","Jeff","Sarah","Ryan" in users){
    return true;
  }else{return false;}
}
console.log(isEveryoneHere(users));

//

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let count = [];

  for (let i in obj){
    if(obj[i].online == true){
      count ++;
    } }
return count;
}
console.log(countOnline(users));

//Access Property Names with Bracket Notation

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
console.log(Object.keys(foods));
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("bananas"));

//Modify an Array Stored in an Object

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
}}};
function addFriend(userObj, friend) {
  for (let i in userObj){
    if(userObj[i].hasOwnProperty("friends")){
       userObj[i].friends.push(friend);
     }
  }
     return userObj.data.friends;   
}
console.log(addFriend(user, 'Pete'));
