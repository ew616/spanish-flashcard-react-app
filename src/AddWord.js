import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Flashcard from './Flashcard';

function AddWord() {    
    const testWordBank = [
    {
        id: 1,
        spanishWord: 'mano',
        englishWord: 'hand'
      },
    ]

    const { register, handleSubmit } = useForm();
 
    const { word, setWord } = useState();

    const onSubmit = (data) => {
        console.log(data)
        data.id = testWordBank[testWordBank.length - 1].id + 1;
        testWordBank.push(data);
        console.log(testWordBank);
    }

    return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            type="text" 
            name="spanishWord" 
            placeholder='Spanish' 
            ref={register({ required: true })}    
        />
            
        <input 
            type="text" 
            name="englishWord"
            placeholder='English'
            ref={register({ required: true })}
        />
        <input type="submit" value="Submit" />
    </form>
    );
}

export default AddWord;