// Javascript (node.js) https://adventofcode.com/2020/day/2
const inputFile = fs.readFileSync('day2puzzle.txt', { encoding: 'utf8', flag: 'r', })

function character_count(char, str) {
    let count = 0;
    const len = str.length;
    for (let i = 0; i < len; i = i + 1) {
        if (char == str[i]) {
        count = count + 1;
        } else { }
    }
    return count;
}

function generate_hashedPuzzle(str) {
    let result = str.split("\n");
    result = result.map(x => x.split("-").join(",").split(":").join(",").split(" ").join(",").split(/[\s, ]+/));
    return result;
}

// puzzle 1
function puzzle1_counter(str) {
    const hashed_puzzle = generate_hashedPuzzle(str);
    const bool_table = hashed_puzzle.map(x => (character_count(x[2], x[3]) >= x[0] && character_count(x[2], x[3]) <= x[1]));
    const len = bool_table.length;
    let counter = 0;
    for (let i = 0; i < len; i = i + 1) {
        if (bool_table[i]) {
        counter = counter + 1;
        } else { } 
    }
    return counter;
}

// puzzle 2
function puzzle2_counter(str) {
    const hashed_puzzle = generate_hashedPuzzle(str);
    const bool_table = hashed_puzzle.map(x => {
    const password = x[3];
    const character = x[2];
    const i1 = x[0] - 1;
    const i2 = x[1] - 1; 
    return (password[i1] == character && password[i2] == character) 
           ? false 
           : (password[i1] == character || password[i2] == character) 
             ? true
             : false;
    } );
    const len = bool_table.length;
    let counter = 0;
    for (let i = 0; i < len; i = i + 1) {
        if (bool_table[i]) {
            counter = counter + 1;
        } else { }
    }
    return counter;
}
console.log(puzzle1_counter(inputFile));
console.log(puzzle2_counter(inputFile));
