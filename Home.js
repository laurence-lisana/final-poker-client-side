import { useNavigate } from "react-router-dom"
import React, {useContext} from "react";
import APPCONTEXT from "../AppContext";

function  Home(){
const navigate=useNavigate()
const { user} = useContext(APPCONTEXT);
const handleRedirect=()=>{
    navigate("/game")
}
const handleRedirectB=()=>{
    navigate("/signup")
}


    return(
        <div>
            <h1>
              Welcome `{user}`
            </h1>
            <button onClick={handleRedirect}>Play</button>
            <button onClick={handleRedirectB}>play later</button>
        </div>
    )
}
export default Home