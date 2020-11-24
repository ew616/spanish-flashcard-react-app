import React, { useState, useEffect, useRef } from 'react';

export default function Flashcard({ spanishWord, englishWord }) {
    //Destructuring, adds two consts set false to useState
    const [ flip, setFlip ] = useState(false)
    const [ height, setHeight ] = useState('initial')
    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height

        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [spanishWord, englishWord,])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])

    return (
        <div 
        //if flip is true, set the className to flip otherwise, set it to nothing
            className = { `card ${flip ? 'flip' : ''}` }
            style={{ height: height }}
        //Then, on click, flip will toggle back between true and false, triggering the css animation
            onClick = {() => setFlip(!flip)}>

        {/* Sets the front of the card, populates with question and the 4 options */}
            <div className = 'front' ref={frontEl}>   

            {/* if flip is true, show the answer, else show the questions and options */}
                {flip ? spanishWord : englishWord}
            </div>
            
        {/* Sets the back of the card to a separate div containing the answer */}
            <div className = 'back' ref={backEl}>
                  {spanishWord}
            </div>

        </div>
    )
}