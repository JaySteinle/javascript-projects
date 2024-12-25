function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
/*
arr = [1,3,5,7,9]
console.log (randomFromArray(arr))
*/
//TODO: Export the randomFromArray function.
module.exports = {
  randomFromArray
};