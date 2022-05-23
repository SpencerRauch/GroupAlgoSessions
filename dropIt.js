const arr1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];

const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];

const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];


// app.get("/api", (req,res) => {
// })
function dropIt(arr, callback) {
    let flag = false; //this flag will check if we've met our callback condition
    let output = [] //this will be our returned array
    for (let num of arr){ //iterate through nums in arr

        if (!flag){ //if we haven't toggled our bool yet
            if (callback(num)){ //see if the callback function returns true on this element
                flag = true; // if it does, toggle our flag
            }
        }

        flag && output.push(num) //if our flag has been toggled, push the rest of the elements to our return arr

    }
    return output // all done
}


function dropIt2(arr, callback){
    let index = null; // will either remain null or become first index that satisfies callback
    for (let i = 0; i<arr.length; i++){ //find first element that satisfies callback and break
        if (callback(arr[i])){
            index = i;
            break;
        }
    }
    return index ? arr.slice(index) : []; // return slice from index if an index was found
    // otherwise, return empty arr
}

console.log(dropIt2(arr1, callback1));
console.log(dropIt2(arr2, callback2));
console.log(dropIt2(arr3, callback3));