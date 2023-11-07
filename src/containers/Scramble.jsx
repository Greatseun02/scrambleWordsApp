import Header from "../components/header";

export default function Scramble(){
    return(
        <>
            <Header/>
            <div>
                <div>
                    <form>
                        <label>Enter a word/sentence you would like to scramble:</label>
                        <input name="wordToScramble" placeholder="Enter" />
                        <button>Submit</button>
                    </form>
                </div>
                <div>
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
                </div>
            </div>
        </>
    )
}