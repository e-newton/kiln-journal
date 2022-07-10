import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import './JournalEntry.scss';

function JournalEntry() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log('swag');
        event.preventDefault();
    }

    return (
        <div className='JournalEntry'>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Time</span>
                    <input id='time' type={'time'}></input>
                </label>
                <label>
                    <span>Temperature</span>
                    <input type={'number'}></input>
                </label>
                <label>
                    <span>Power</span>
                    <input type={'number'}></input>
                </label>
                <label>
                    <span>Notes</span>
                    <span className='text-area' role="textbox" contentEditable></span>
                </label>
                <button className='submit-button'>
                    <FontAwesomeIcon icon={solid('check')} size={'lg'}/>
                </button>
            </form>
        </div>
    )
}

export default JournalEntry;