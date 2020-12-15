// Javascript (node.js) https://adventofcode.com/2020/day/5
const inputFile = fs.readFileSync('day5puzzle.txt', { encoding: 'utf8', flag: 'r', });

// puzzle 1
function highest(str) {
    let arr = str.split("\n");
    const len = arr.length;
    arr = arr.map(x => seatIDval(x));
    let curr_val = arr[0];
    for (let i = 1; i < len; i = i + 1) {
        if (curr_val < arr[i]) {
            curr_val = arr[i];
        } else { }
    }
    return curr_val;
}

function rowNo(str) {
    let max = 127;
    let min = 0; 
    for (let i = 0; i < 7; i = i + 1) {
        if (str[i] == 'F') {
            max = Math.floor((max + min) / 2);
        } else {
            min = Math.ceil((max + min) / 2);
        }
    }
    return max == min ? max : str[6] == 'F' ? min : max;
}


function column(str) {
    let max = 7;
    let min = 0;
    const len = str.length;
    for (let i = 7; i < len; i = i + 1) {
        if (str[i] == 'R') {
            min = Math.ceil((max + min) / 2);
        } else {
            max = Math.floor((max + min) / 2);
        }
    }
    return max == min ? max : str[9] == 'R' ? max : min;
}

function seatIDval(str) {
    return rowNo(str) * 8 + column(str);
}

// puzzle 2
function myseat(str) {
    let arr = str.split("\n");
    arr = arr.map(x => seatIDval(x));
    arr = mergesort(arr);
    const len = arr.length;
    let result = 0;
    for (let i = 0; i < len - 1; i = i + 1) {
        if (arr[i + 1] - arr[i] == 2) {
            result = arr[i] + 1;
        } else { }
    }
    return result;
}

function merge(left, right) {
    const len_left = left.length;
    const len_right = right.length;
    const total_len = len_left + len_right;
    let left_index = 0;
    let right_index = 0;
    let result = [];
    for (let i = 0; i < total_len; i = i + 1) {
        if (left_index == len_left) {
            result[i] = right[right_index];
            right_index = right_index + 1;
        } else if (right_index == len_right) {
            result[i] = left[left_index];
            left_index = left_index + 1;
        } else {
            if (left[left_index] <= right[right_index]) {
                result[i] = left[left_index];
                left_index = left_index + 1;
            } else {
                result[i] = right[right_index];
                right_index = right_index + 1;
            }
        }
    }
    return result;
}

function mergesort(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    } else {
        const mid = Math.floor(len / 2);
        let left = [];
        let right = [];
        for (let i = 0; i < mid; i = i + 1) {
            left[i] = arr[i];
        } 
        for (let i = 0; i < len - mid; i = i + 1) {
            right[i] = arr[i + mid];
        }
        return merge(mergesort(left), mergesort(right));
    }
}

console.log(highest(inputFile));
console.log(myseat(inputFile));
