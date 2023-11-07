import Header from "../components/header";

export default function HomePage(){
    return(
        <>
            <Header />
            <div>
                <p>This is an app that helps to scramble words.</p>
                <a href="/scramble"><button>Click on this to get started scrambling.</button></a> 
            </div>
        </>
    )
}