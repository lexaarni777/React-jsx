import React from 'react';
import './Car.css'

export default props => {
    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    return (
        <div className='Car'>
            <h3>Car name: {props.name}</h3>
            <p>Year: {props.year}</p>
            <input
                type='text'
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}
