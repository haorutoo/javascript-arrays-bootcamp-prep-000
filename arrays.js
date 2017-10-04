var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) {
  var array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  var array = [...array,element]
  return array
}

function destructivelyAddElementToEndOfArray(array,element) {
  array =  array.push(element)
  return array

}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array = array.shift()
  return array
}

function removeElementFromEndOfArray(array){
  return array = array.slice(array.length-1) //(0, carray.length - 1)
  //return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array = array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}
