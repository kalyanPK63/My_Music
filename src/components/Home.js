import React from "react";
import Header from "./Header";
import Top10Artists from "./Top10Artists";
import Top10Songs from "./Top10Songs";

function Home() {

    return(
        <div>
            <div className="box">
                <Top10Songs />
                <Top10Artists />
            </div>
        </div>
    )
}

export default Home