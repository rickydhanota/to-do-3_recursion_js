//Given a sorted array and a value, recursively determine whether value is found within array. 

//rBinarySearch([1,3,5,6],4) = false; 

//rBinarySearch([4,5,6,8,12],5) = true;


function rBinarySearch(arr, value) {
    var mid = Math.floor(arr.length/2);
    if(arr[mid] == value) {
        return true;
    }
    else if(value < arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, mid), value);
    }
    else if(value > arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(mid, arr.length), value)
    } else {
        return false
    }
}

console.log(rBinarySearch([1, 3, 5, 6], 4));
console.log(rBinarySearch([4, 5, 6, 8, 12], 5));