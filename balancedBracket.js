function balancedBracket(brackets) {
    let trimBrackets = brackets.trim()
    if (trimBrackets.length == 0) {
        console.log("return pertama")
        return "NO"
    }

    let stackBracket = []
    let i = 0

    while (i < trimBrackets.length) {
        let bracket = trimBrackets[i]

        if(bracket == '(' || bracket == '[' || bracket == '{') {
            stackBracket.push(bracket)
            i++
            continue
        }

        if (stackBracket.length == 0) {
            console.log("return kedua")
            return "NO"
        }

        let openBracket = ""
        switch(bracket) {
            case ')':
                openBracket = stackBracket.pop()
                if (openBracket != '(') {
                    console.log("return ketiga")
                    return "NO"
                }
                break;
            case ']':
                openBracket = stackBracket.pop()
                if (openBracket != '[') {
                    console.log("return keempat")
                    return "NO"
                }
                break;
            case '}':
                openBracket = stackBracket.pop()
                if (openBracket != '{') {
                    console.log("return kelima")
                    return "NO"
                }
                break;
        }
        i++
    }

    return "YES"
}

console.log(balancedBracket("{(([ ])[ ] )[ ]}"))