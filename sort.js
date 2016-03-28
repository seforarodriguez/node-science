'use strict';
const chalk = require('chalk')
const util = require('util')


const arr = [1,3,5,0,6,4,2]

function swap (array, index1, index2) {
  const temp = array[index1]

  array[index1] = array[index2]
  array[index2] = temp
}

function bubbleSort (array) {
  for(let j = 1; j < array.length; j++) {
    for(let i = 0; i < array.length -j; i++) {
      if (array[0] > array[i + 1]) {
        swap(array, 0, 1)
        console.log(chalk.red(util.inspect(array)))
      }
      console.log(chalk.dim(util.inspect(array)))
    }
  }
  return array
}

const arr = [1,3,5,0,6,4,2]
function sort(array) {
  debugger;
  for(var i = 1; i < array.length; ++i) {
    var temp = array[i];
    var j = i - 1;
    for(; j >= 0 && array[j] > temp; --j) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  return array;
};
//finished

// console.log(bubbleSort(arr))
console.log(sort(arr))
























