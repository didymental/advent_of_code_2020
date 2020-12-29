// Javascript (node.js) https://adventofcode.com/2020/day/1 
const inputFile = fs.readFileSync('day1puzzle.txt', { encoding: 'utf8', flag: 'r', })
let puzzle = inputFile.split('\n').map(x => parseInt(x));

// puzzle 1
function bubble_arr_2020(arr) { 
    let result = null;
    const len = arr.length;
    for (let i = 0; i < len; i = i + 1) {
        const val = arr[i];
        for (let j = i + 1; j < len; j = j + 1) {
            if (val + arr[j] == 2020) {
            result = [val, arr[j]];
            break;
            } else { }
        }
    }
    return result[0] * result[1];
}

// puzzle 2
function triple_bubble(arr) {
    const len = arr.length;
    let result = null;
    for (let i = 0; i < len; i = i + 1) {
        const val_1 = arr[i];
        for (let j = i + 1; j < len; j = j + 1) {
            const val_2 = arr[j];
            for (let k = j + 1; k < len; k = k + 1) {
                const val_3 = arr[k];
                if (val_1 + val_2 + val_3 == 2020) {
                    result = [val_1, val_2, val_3];
                    break;
                } else { }
            }
        }
    }
    return result[0] * result[1] * result[2];
}

console.log(bubble_arr_2020(puzzle));
console.log(triple_bubble(puzzle));
