function introductionWithLanguageOptional(name, language = 'Javascript'){
    return `Hi, my name is ${name}, and my coding language is ${language}.`
}

console.log(introductionWithLanguageOptional('John'));