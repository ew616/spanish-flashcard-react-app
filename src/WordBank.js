import React from 'react';

function WordBank({ spanishWord, englishWord }) {
    return <div>
        <li>Spanish: {spanishWord}</li>
        <li>English: {englishWord}</li>
    </div>
}

export default WordBank;