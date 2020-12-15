const inputFile = fs.readFileSync('day10puzzle.txt', { encoding: 'utf8', flag: 'r', });
let data = inputFile.split('\n').map(x => parseInt(x));

// puzzle 1
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

function join_adaptors(start, sorted_input, ones, threes) {
    if (sorted_input.length == 0) {
        return ones * threes;
    } else {
        const curr_val = sorted_input[0];
        if (curr_val - start == 0) {
            return join_adaptors(start, sorted_input.slice(1), ones, threes);
        } else if (curr_val - start == 1) {
            return join_adaptors(curr_val, sorted_input.slice(1), ones + 1, threes);
        } else if (curr_val - start == 2) {
            return join_adaptors(curr_val, sorted_input.slice(1), ones, threes);
        } else if (curr_val - start == 3) {
            return join_adaptors(curr_val, sorted_input.slice(1), ones, threes + 1);
        } else {
            return -1;
        }
    }
}

function main(input) {
    input = mergesort(input);
    return join_adaptors(0, input, 0, 1);
}

// puzzle 2
let u = [0].concat(mergesort(data));

let cache = [];

const dp = n => {
    if (n == u.length - 1) {
        return 1; 
    } else if (n in cache) {
        return cache[n];
    } else {
        let ans = 0;
        for (let i = n + 1; i < u.length; i = i + 1) {
            if (u[i] - u[n] <= 3) {
                ans += dp(i);
            }
        }
        cache[n] = ans;
        return ans;
    }
}

console.log(main(data));
console.log(dp(0));
