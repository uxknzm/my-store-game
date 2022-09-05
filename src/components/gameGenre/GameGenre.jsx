import React from 'react';
import './GameGenre.css'

const GameGenre = ({ genre }) => {
    return (
        <span className='game__genre'>
            {genre}
        </span>
    );
};

export default GameGenre;