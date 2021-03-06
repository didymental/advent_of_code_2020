// Javascript (node.js) https://adventofcode.com/2020/day/6
const inputFile = fs.readFileSync('/users/didymusne/downloads/day6puzzle.txt', { encoding: 'utf8', flag: 'r', });

// puzzle 1
function generate_table(str) {
    let temp = str.split("\n\n");
    temp = temp.map(x => x.split("\n").join(''));
    return temp;
}

function remove_duplicate_char(str) {
    let result = '';
    const len = str.length;
    for (let i = 0; i < len; i = i + 1) {
        if (!(result.includes(str[i]))) {
            result = result + str[i];
        } else { }
    }
    return result;
}

function sum_of_counts(str) {
    let arr = generate_table(str);
    arr = arr.map(x => remove_duplicate_char(x));
    arr = arr.map(x => x.length);
    const len = arr.length;
    let counter = 0;
    for (let i = 0; i < len; i = i + 1) {
        counter = arr[i] + counter;
    }
    return counter;
}

// puzzle 2
function answer(str) {
    let temp = str.split("\n\n");
    temp = temp.map(x => x.split("\n"));
    temp = temp.map(x => x.filter(y => y !== ''));
    return temp;
}

function check_repeat(char, str) {
    return str.includes(char);
}

function number_of_same_answers(arr) {
    const len = arr.length;
    let counter = 0;
    let str = arr[0];
    let str_len = str.length;
    let bool = true;
    for (let i = 0; i < str_len; i = i + 1) {
        for (let j = 1; j < len; j = j + 1) {
            bool = check_repeat(str[i], arr[j]) && bool;
        }
        if (bool) {
            counter = counter + 1;
        } else { 
            bool = true;
        }
    }
    return counter;
}

function sum(arr) {
    let counter = 0;
    const len = arr.length;
    for (let i = 0; i < len; i = i + 1) {
        counter = arr[i] + counter;
    }
    return counter;
}

console.log(sum_of_counts(inputFile));
console.log(sum(answer(inputFile).map(x => number_of_same_answers(x))));
