// Javascript (node.js) https://adventofcode.com/2020/day/9

const inputFile = fs.readFileSync('day9puzzle.txt', { encoding: 'utf8', flag: 'r', });
let data = inputFile.split('\n');
data = data.map(x => parseInt(x));

// puzzle 1
function xmas_algo(arr) {
    if (arr.length <= 25) {
        return NaN;
    } else {
        let val = arr[25];
        let checker = false;
        for (let i = 0; i < 25 - 1; i = i + 1) {
            for (let j = 0; j < 25; j = j + 1) {
                if (val == arr[i] + arr[j] && arr[i] !== arr[j]) {
                checker = checker || true;
                } else {
                checker = checker || false;
                }
            }
        }
        if (checker) {
            return xmas_algo(arr.slice(1));
        } else {
            return val;
        }
    }
}

// puzzle 2
function smallest(arr) {
    const len = arr.length;
    let val = arr[0];
    for (let i = 1; i < len; i = i + 1) {
        if (arr[i] < val) {
            val = arr[i]; 
        } else { }
    }
    return val;
}

function largest(arr) {
    const len = arr.length;
    let val = arr[0];
    for (let i = 1; i < len; i = i + 1) {
        if (arr[i] > val) {
            val = arr[i];
        } else { }
    }
    return val;
}

function sum_array(arr) {
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i = i + 1) {
        sum = arr[i] + sum;
    }
    return sum;
}

function continuous_set(val, arr, input) {
    if (sum_array(arr) == val && arr.length > 1) {
        return arr;
    } else if (sum_array(arr) == val || sum_array(arr) < val) {
        arr[arr.length] = input[0];
        input = input.slice(1);
        return continuous_set(val, arr, input);
    } else {
        arr = arr.slice(1);
        return continuous_set(val, arr, input);
    }
}

function encryption_weakness(input) {
    const set = continuous_set(xmas_algo(input), [], input);
    return smallest(set) + largest(set);
}

console.log(xmas_algo(data));
console.log(encryption_weakness(data));
