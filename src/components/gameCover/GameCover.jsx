import React from 'react'
import './GameCover.css'

const GameCover = ({image = ''}) => {
    return (
        <div className='game__cover' style={{backgroundImage: `url(${image})`}} />
    );
};

export default GameCover;