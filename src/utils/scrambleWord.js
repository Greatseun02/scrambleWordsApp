export default function scrambleWord(toScramble){
    let scrambled;
    let preparedSentence = toScramble.split(" ")
    scrambled = preparedSentence.map((word)=>scramble(word)).join(" ")
    return scrambled
}

function scramble(word){
    return word
}

function generateRandomNumber(){
    
}

function ifRandomNumberIsUsed(){

}