import React, { useState } from "react";
import ScoreCounter from "./ScoreCounter";
import GenerateRandomCard from './GenerateRandomCard'

function TestYourself() {
    return (
        <div>
            <h1>TEST YOSELF IF YOU DARE</h1>

            <GenerateRandomCard />

            <ScoreCounter />
        </div>
    )

}

export default TestYourself;