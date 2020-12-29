// Javascript (node.js) https://adventofcode.com/2020/day/4
const inputFile = fs.readFileSync('day4puzzle.txt', { encoding: 'utf8', flag: 'r', })
let data = generate_passports(inputFile);

function generate_passports(str) {
    let passport = str.split("\n\n");
    passport = passport.map(x => x.split(/[\s, ]+/));
    passport = passport.map(x => x.filter(y => y !== ''));
    passport = passport.map(x => x.map(y => y.split(":")));
    return passport;
}

// puzzle 1
function count_valid_passports_p1(passport) {
    passport = passport.map(x => {
        let result = '';
        const len = x.length;
        for (let i = 0; i < len; i = i + 1) {
            result = x[i] + ' ' + result;
        }
        return result; } );
    passport = passport.filter(y => y.includes('byr') && y.includes('iyr') && 
        y.includes('eyr') && y.includes('hgt') && y.includes('hcl') 
            && y.includes('ecl') && y.includes('pid'));
    return passport.length;
}

// puzzle 2
function count_passports_p2(pp) {
    let temp = pp.map(x => validation(x));
    return count_true(temp);
}

function check(pass) {
    let temp = pass.map(x => {
        let result = '';
        for (let i = 0; i < 2; i = i + 1) {
        result = x[i] + ' ' + result;
        }
        return result;
    } );
    const len = temp.length;
    let result = '';
    for (let i = 0; i < len; i = i + 1) {
        result = temp[i] + ' ' + result;
    }
    return result.includes('byr') && result.includes('iyr') && result.includes('eyr') &&  
        result.includes('hgt') && result.includes('hcl') && result.includes('ecl') && 
            result.includes('pid');
}

function validation(x) {
    if (check(x)) {
        let bool = true;
        const len = x.length;
        for (let i = 0; i < len; i = i + 1) {
            if (x[i][0] == 'byr' && (x[i][1] >= 1920 && x[i][1] <= 2002)) {
                bool = true && bool;
            } else if (x[i][0] == 'iyr' && (x[i][1] >= 2010 && x[i][1] <= 2020)) {
                bool = true && bool;
            } else if (x[i][0] == 'eyr' && (x[i][1] >= 2020 && x[i][1] <= 2030)) {
                bool = true && bool;
            } else if (x[i][0] == 'pid' && x[i][1].length == 9) {
                let str = x[i][1];
                if (parseInt(str) !== NaN) {
                    bool = true && bool;
                } else {
                    bool = false && bool;
                    break;
                }
            } else if (x[i][0] == 'cid') {
                bool = true && bool;
            } else if (x[i][0] == 'ecl' && (x[i][1] == 'amb' || x[i][1] == 'blu' 
                    || x[i][1] == 'brn' || x[i][1] == 'gry' || x[i][1] == 'grn' 
                        || x[i][1] == 'hzl' || x[i][1] == 'oth')) {
                bool = true && bool;
            } else if (x[i][0] == 'hgt') {
                if (x[i][1].includes('in')) {
                    let str = x[i][1];
                    str = str.replace('in', '');
                    const val = parseInt(str);
                    bool = (val >= 59 && val <= 76) && bool;
                } else if (x[i][1].includes('cm')) {
                    let str = x[i][1];
                    str = str.replace('cm', '');
                    const val = parseInt(str);
                    bool = (val >= 150 && val <= 193) && bool;
                } else {
                    bool = false && bool;
                    break;
                }
            } else if (x[i][0] == 'hcl' && x[i][1][0] == '#') {
                let str = x[i][1];
                function check_string(str) {
                    let val = true;
		    const len = str.length;
		    for (let i = 1; i < len; i = i + 1) {
		        if (str[i] == 'a' || str[i] == 'b' || str[i] == 'c' || 
			str[i] == 'd' || str[i] == 'e' || str[i] == 'f' || 
			str[i] == '0' || str[i] == '1' || str[i] == '2' || 
			str[i] == '3' || str[i] == '4' || str[i] == '5' || 
			str[i] == '6' || str[i] == '7' || str[i] == '8' || 
			str[i] == '9') { 
		            val = true && val;
                        } else {
                            val = false && val;
                        }
                    }
                    return val;
                }
                if (check_string(str)) {
                    bool = true && bool;
                } else {
                    bool = false;
                    break;
                }
            } else {
                bool = false && bool;
                break;
            }
        }
        return bool;
    } else {
        return false;
    }
}

function count_true(arr) {
    const len = arr.length;
    let counter = 0;
    for (let i = 0; i < len; i = i + 1) {
        if (arr[i]) {
        counter = counter + 1;
        } else { }
    }
    return counter;
}

console.log(count_valid_passports_p1(data));
console.log(count_passports_p2(data));
