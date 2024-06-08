function main(str, k) {
    return replaceCharacter(str, k, 0, str.length-1)
}

function replaceCharacter(str, k, minLengthStr, maxLengthStr) {
    if (!isPalindrome(str) && k == 0 ) {
        return -1
    }

    if (isPalindrome(str) && k == 0) {
        return str
    }

    let newString = str

    if (!isPalindrome(str) ) {
        if (str[minLengthStr] != str[maxLengthStr]) {
            let newValue = Math.max(str[minLengthStr], str[maxLengthStr])
            if (str[minLengthStr] < newValue) {
                newString = str.replaceAt(minLengthStr, newValue)
                // str[minLengthStr] = newValue
            } else {
                newString = str.replaceAt(maxLengthStr, newValue)
                // str[maxLengthStr] = newValue
            }
            k--
        }
        
        return replaceCharacter(newString, k, minLengthStr+1, maxLengthStr-1)
    }

    if(isPalindrome(str)) {
        if(k%2 == 0) {
            if (minLengthStr >= maxLengthStr || k === 0) {
                return str;
            }

            if (str[minLengthStr] != '9' && k >= 2) {
                newString = str.replaceAt(minLengthStr, '9')
                newString = newString.replaceAt(maxLengthStr, '9')
                k -= 2
            }
            

            return replaceCharacter(newString, k, minLengthStr+1, maxLengthStr-1)
        }

        if(k%2 != 0 && str.length%2 != 0) {
            if (k === 0) {
                return str;
            }

            let middleIndex = Math.floor(str.length / 2)
            if (str[middleIndex] != '9') {
                newString = str.replaceAt(middleIndex, '9')
                k--
            }

            return replaceCharacter(newString, k, minLengthStr+1, maxLengthStr-1)
        }

    }

    return -1
}

function isPalindrome(str) {
    // Base case: if the string has 0 or 1 characters, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    
    // Check if the first and last characters are the same
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    
    // Recur on the substring excluding the first and last characters
    return isPalindrome(str.substring(1, str.length - 1));
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + 1);
}

// Example usage:
let str = '3943'
let k = 3
console.log(main(str, k)); // Output: 3993

let str2 = '942239'
let k2 = 1
console.log(main(str2, k2)); // Output: 3993