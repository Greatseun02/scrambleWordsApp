import { useState } from "react";
import Header from "../components/header";

export default function Scramble(){
    const [displayInputWord, setDisplayInputWord] = useState(true)
    const [displayScrambleWord, setDisplayScrambleWord] = useState(false)
    return(
        <>
            <Header/>
            <div>
                {displayInputWord && <div>
                    <form>
                        <label>Enter a word/sentence you would like to scramble:</label>
                        <input name="wordToScramble" placeholder="Enter" />
                        <button onClick={
                            ()=>{
                                setDisplayInputWord(false)
                                setDisplayScrambleWord(true)
                            }
                        }>Submit</button>
                    </form>
                </div>}

                {displayScrambleWord && <div>
                    <p>
                        Your word/sentence is: 
                    </p>
                    <p>Hello</p>
                    <p>
                        The scrambled version is:
                    </p>
                    <p>
                        World
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