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
                    <span role="textbox" contentEditable></span>
                </label>
            </form>
        </div>
    )
}

export default JournalEntry;