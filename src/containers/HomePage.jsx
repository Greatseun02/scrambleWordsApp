import Header from "../components/header";
import { Router, Link } from "react-router-dom";

export default function HomePage(){
    return(
        <>
            <Header />
            <div>
                <p>This is an app that helps to scramble words.</p>
                <Link href="/scramble"><button>Click on this to get started scrambling.</button></Link> 
            </div>
        </>
    )
}