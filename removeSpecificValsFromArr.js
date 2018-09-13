function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  let index = arr.indexOf(elem);
  if(index > 0){
    arr.splice(index,1);
  }
  return arr;
}
// change code here to test different cases:
console.log(filteredArray([5,6,7,1,23,3,56,49,88], 6));
