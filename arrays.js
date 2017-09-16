var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (a,b) {
  var newAddArray = [b, ...a];
  return newAddArray;
}

function destructivelyAddElementToBeginningOfArray (a,b) {
  a.unshift(b);
  return a;
}

function addElementToEndOfArray (a,b) {
  var newAddArray = [...a, b];
  return newAddArray;
}


function destructivelyAddElementToEndOfArray(a,b) {
  a.push(b);
  return a;
}

function accessElementInArray (array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}
