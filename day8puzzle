// Javascript (node.js) https://adventofcode.com/2020/day/8

const inputFile = fs.readFileSync('day8puzzle.txt', { encoding: 'utf8', flag: 'r', });
let data = inputFile.split("\n");

// puzzle 1
function extract_acc_val(input) {
    let temp = input.map(x => x.split(' ')).map(x => {
        return [x[0], parseInt(x[1])]; } );
    let arr = [];
    let index = 0;
    let acc = 0;
    while (arr[index] !== 1) {
        const action = temp[index][0];
        let val = temp[index][1];
        if (action.includes('acc')) {
            acc = acc + val;
            val = 1;
        } else if (action.includes('nop')) {
            val = 1;
        } else { }
        arr[index] = 1;
        index = index + val;
    }
    return acc;
}


// puzzle 2
function sum_up_acc(arr) {
    let acc = 0;
    const len = arr.length;
    let i = 0;
    while (i < len) {
        const action = arr[i][0];
        let val = arr[i][1];
        if (action.includes('acc')) {
            acc = acc + val;
            val = 1;
        } else if (action.includes('nop')) {
            val = 1;
        } else { }
        i = i + val;
    }
    return acc;
}

function is_loop(arr) {
    let bool = false;
    let other_arr = [];
    const len = arr.length;
    let i = 0;
    while (i < len) {
        const action = arr[i][0];
        let val = arr[i][1];
        if (action.includes('acc') || action.includes('nop')) {
            val = 1;
        } else { }
        other_arr[i] = 1;
        i = i + val;
        if (other_arr[i] == 1) {
            bool = true;
            break;
        } else { }
    }
    return bool;
}


function fix_bug(input) {
    let temp = input.map(x => x.split(' ')).map(x => {
        return [x[0], parseInt(x[1])]; } );
    let len = temp.length;
    let sum = 0;
    for (let i = 0; i < len; i = i + 1) {
        if (temp[i][0].includes('nop')) {
            temp[i][0] = 'jmp';
            if (is_loop(temp)) {
                temp[i][0] = 'nop';
            } else {
                sum = sum_up_acc(temp);
                break;
            }
        } else if (temp[i][0].includes('jmp')) {
            temp[i][0] = 'nop';
            if (is_loop(temp)) {
                temp[i][0] = 'jmp';
            } else {
                sum = sum_up_acc(temp);
                break;
            }
        } else { }
    }
    return sum;
}

console.log(extract_acc_val(data));
console.log(fix_bug(data));
