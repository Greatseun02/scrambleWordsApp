export default function scrambleWord(toScramble){
    let scrambled;
    let preparedSentence = toScramble.split(" ")
    scrambled = preparedSentence.map((word)=>scramble(word, 0)).join(" ")
    return scrambled
}

function scramble(word, count){
    let randomNumberRange = word.length
    let selectedRandomNumbers = []
    let wordSplit = word.split("")
    let newWord = []
    let randomNumber;
    wordSplit.map(()=>{
        randomNumber = generateRandomNumber(randomNumberRange, selectedRandomNumbers)
        newWord.push(word[randomNumber])
        selectedRandomNumbers.push(randomNumber)
    })
    newWord = newWord.join("")
    if(newWord === word & count < 4){
        newWord = scramble(word, count+1)
    }
    return newWord
}

function generateRandomNumber(range, selectedRandomNumbers){
    let randomNumber = Math.floor(Math.random() * range)
    if (selectedRandomNumbers.includes(randomNumber)){
        randomNumber = generateRandomNumber(range, selectedRandomNumbers)
        return randomNumber
    }
    return randomNumber
}
