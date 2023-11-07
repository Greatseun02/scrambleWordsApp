import { useEffect, useState } from "react";
import Header from "../components/header";
import scrambleWord from "../utils/scrambleWord";

export default function Scramble(){
    const [displayInputWord, setDisplayInputWord] = useState(true)
    const [displayScrambleWord, setDisplayScrambleWord] = useState(false)
    const [toScramble, setToScramble] = useState("")
    const [scrambled, setScrambled] = useState("")
    useEffect(()=>{
        setScrambled(()=>{
            return scrambleWord(toScramble)
        })
    }, [toScramble])
    return(
        <>
            <Header/>
            <div>
                {displayInputWord && <div>
                    <form onSubmit={(event)=>{
                        event.preventDefault()
                        setToScramble(event.target.wordToScramble.value)
                        setDisplayInputWord(false)
                        setDisplayScrambleWord(true)
                    }}>
                        <label>Enter a word/sentence you would like to scramble:</label>
                        <input name="wordToScramble" placeholder="Enter" />
                        <button type="submit"> Submit</button>
                    </form>
                </div>}

                {displayScrambleWord && <div>
                    <p>
                        Your word/sentence is: 
                    </p>
                    <p>
                        {toScramble}
                    </p>
                    <p>
                        The scrambled version is:
                    </p>
                    <p>
                        {scrambled}
                    </p>
                    <button onClick={
                        ()=>{
                            setDisplayInputWord(true)
                            setDisplayScrambleWord(false)
                        }
                    }>Go back</button>
                </div>}
            </div>
        </>
    )
}