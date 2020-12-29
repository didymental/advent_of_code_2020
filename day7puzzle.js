// Javascript (node.js) https://adventofcode.com/2020/day/7

const inputFile = fs.readFileSync('day7puzzle.txt', { encoding: 'utf8', flag: 'r', });
let data = inputFile.split("\n");

// puzzle 1
function remove_duplicates(a) {
    uniqueArray = a.filter(function(item, pos) {
        return a.indexOf(item) == pos;
    });
    return uniqueArray;
}

function count_bags(input) {
    let bag_arr = [];
    let pos = 0;
    function helper(input, str) {
        let temp = input.filter(x => x.includes(str) || x.includes(str.slice(0, -1)));
        if (temp.length - 1 > 0) {
            temp = temp.map(x => x.split(' contain '));
            temp = temp.filter(x => !(x[0].includes(str)));
            const len = temp.length;
            for (let i = 0; i < len; i = i + 1) {
                bag_arr[pos] = temp[i][0];
                pos = pos + 1;
                helper(input, temp[i][0]);
            }
        } else { }
    }
    helper(input, 'shiny gold bags');
    let new_arr = remove_duplicates(bag_arr);
    return new_arr.length;
}

// puzzle 2
function break_into_units(str) {
    let bag_val_arr = str.split(", ").map(x => {
        if (x.includes('no other bags')) {
        return [0, null];
        } else {
            let bag_val = x.match(/\d+/g).map(x => parseInt(x));
            let len = x.length;
            let bag = '';
            for (let i = 2; i < len; i = i + 1) {
                bag = bag + x[i];
            } 
            bag_val = bag_val.map(x => [x, bag]);
            return bag_val;
        }
    } );
    return bag_val_arr;
}

function find_bag_to_others(str, data) {
    const len = data.length;
    let new_arr = data.filter(x => x[0].includes(str) || x[0].includes(str.slice(0, -1)));
    return new_arr[0][1];
}

function traverse_sum_bags(input) {
    let temp = input.map(x => x.split(' contain ')).map(x => {
        let new_arr = break_into_units(x[1]);
        let bag = x[0];
        return [bag, new_arr]; });
    function sum_traversal(xs) {
        if (xs[0][0] == 0) {
            return 0;
        } else {
            let sum = 0;
            const number_of_nodes = xs.length;
            for (let i = 0; i < number_of_nodes; i = i + 1) {
                const bag_no = xs[i][0][0];
                sum = bag_no + 
                      (bag_no * 
                         sum_traversal(find_bag_to_others(xs[i][0][1], temp))) 
                            + sum;
            }
            return sum;
        }
    }
    let count = sum_traversal(find_bag_to_others('shiny gold bags', temp));
    return count;
}

console.log(count_bags(data));
console.log(traverse_sum_bags(data));
