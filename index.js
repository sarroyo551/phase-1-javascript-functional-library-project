function myEach(collection, callback) {
  for (const i in collection) {
    const entry = collection[i];
    callback(entry, i, collection);
  }
  return collection;
}

function myMap(collection, callback) {
  const mappedArr = [];
  for (const i in collection) {
    const entry = collection[i];
    const newEntry = callback(entry, i, collection);
    mappedArr.push(newEntry);
  }
  return mappedArr;
}

function myReduce(collection, callback, acc) {
  let accumulator = acc;
  let ii = 0;
  for (const i in collection) {
    ii++;
    const entry = collection[i];
    if (acc === undefined && ii === 1) {
      accumulator = entry;
    } else {
      accumulator = callback(accumulator, entry, i, collection);
    }
  }
  return accumulator;
}

function myFind(collection, predicate) {
  for (const i in collection) {
    const entry = collection[i];
    if (predicate(entry, i, collection)) {
      return entry;
    }
  }
}

function myFilter(collection, predicate) {
  const returnArr = [];
  for (const i in collection) {
    const entry = collection[i];
    if (predicate(entry, i, collection)) {
      returnArr.push(entry);
    }
  }
  return returnArr;
}

function mySize(collection) {
  let ii = 0;
  for (const _ in collection) {
    ii++;
  }
  return ii;
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    const returnArr = [];
    for (let i = 0; i < n; i++) {
        returnArr.push(array[i])
    }
    return returnArr;
  }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
      } else {
        const returnArr = [];
        for (let i = 0; i < n; i++) {
            returnArr.unshift(array[array.length - 1 - i])
        }
        return returnArr;
      }
}

function myKeys(obj) {
    const arr = []
    for (const key in obj) {
        arr.push(key)
    } 
    return arr
}

function myValues(obj) {
    const arr = []
    for (const key in obj) {
        const value = obj[key]
        arr.push(value)
    } 
    return arr
}
