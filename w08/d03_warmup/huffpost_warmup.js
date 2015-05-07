// Given an array of unsorted positive ints, write a function that finds runs of 3 consecutive numbers (ascending or descending) and returns the indices where such runs begin. If no such runs are found, return null.
//
// function findConsecutiveRuns(input:Array):Array
//
// Example: [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7] would return [0, 4, 6, 7]
var array = [1, 2, 3, 5, 10, 9, 8, 9, 10, 11, 7]
//find consecutive numbers of 3 in a row!
//return the index where the consecutive numbers start
function findConsecutiveRuns(array){
  for (var i=0; i<array.length; i++){
    if (array[i+1] - array[i] == 1 && array[i+2] - array[i+1] == 1){
    //return [i]
      console.log(i)
    }
    else if (array[i+1] - array[i] == -1 && array[i+2] - array[i+1] == -1){
      console.log(i)
    }
    else{
      //return null
      console.log(null)
    }
  }
}

//OR COULD DO THIS WAY (WITH "OR" STATEMENT):
function findConsecutiveRuns(Array){
  for (var i=0; i<array.length; i++){
    if ((array[i+1] - array[i] == 1 && array[i+2] - array[i+1] == 1)||(array[i+1] - array[i] == -1 && array[i+2] - array[i+1] == -1)){
    //return array[i]
      console.log(i)
    }
    else{
      //return null
      console.log(null)
    }
  }
}
