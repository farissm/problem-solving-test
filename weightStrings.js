function main(param1, param2) {
    let weightStrings = checkWeightString(param1)

    console.log(compareWeightString(weightStrings, param2))
    // return result
}

function checkWeightString(strings) {
    let i = 0  
    let counter = 1
    let arrayParam = []    
    while (i < strings.length) {
        if (strings.charCodeAt(i) - 96 !=  strings.charCodeAt(i-1) - 96) {
            counter = 1
        }
        arrayParam.push((strings.charCodeAt(i) - 96) * counter)
        counter++
        i++
    }
    return arrayParam

}

function compareWeightString(weightString, comparer) {
    let j = 0
    let result = []
    while (j < comparer.length) {
        if (weightString.includes(comparer[j])) {
            result.push('yes')
            j++
            continue
        }
        result.push('no')
        j++
    }

    return result
}

main("aayyhhoo82", [1, 3, 7, 9])