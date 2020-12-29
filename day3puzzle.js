// Javascript (node.js) https://adventofcode.com/2020/day/4
const inputFile = fs.readFileSync('day3puzzle.txt', { encoding: 'utf8', flag: 'r', });
let puzzle = inputFile.split("\n");

// puzzle 1
function traverse_puzzle(arr) {
    let counter = 0;
    let i = 0;
    let j = 0;
    const height = arr.length;
    const width = arr[0].length;
    while (i + 1 < height) {
        i = i + 1;
        j = (j + 3 >= width) ? j + 3 - width : j + 3;
        if (arr[i][j] == '#') {
            counter = counter + 1;
        } else { }
    }
    return counter;
}

// puzzle 2
function multi_traverse_map(arr, k, n) {
    let counter = 0;
    let i = 0;
    let j = 0;
    const height = arr.length;
    const width = arr[0].length;
    while (i + k < height) {
        i = i + k;
        j = (j + n >= width) ? j + n - width : j + n;
        if (arr[i][j] == '#') {
            counter = counter + 1;
        } else { }
    }
    return counter;
}

console.log(traverse_puzzle(puzzle));
console.log(multi_traverse_map(puzzle, 1, 1) * multi_traverse_map(puzzle, 1, 3) * multi_traverse_map(puzzle, 1, 5) * multi_traverse_map(puzzle, 1, 7) * multi_traverse_map(puzzle, 2, 1));
