import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import GameCover from '../gameCover/GameCover'
import GameBuy from '../gameBuy/GameBuy'
import GameGenre from '../gameGenre/GameGenre'
import './GameItem.css'
import { setCurrentGame } from '../../redux/games/reducer';

const GameItem = ({ game }) => {
    const navigate = useNavigate()
    const dispath = useDispatch()
    const handleClick = () => {
        dispath(setCurrentGame(game))
        navigate(`/app/${game.title}`)
    }
    return (
        <div className='game__item' onClick={ handleClick }>
            <GameCover image={game.image} />
            <div className="game__item-details">
                <span className='game__item-title'>
                    {game.title}
                </span>
                <div className="game__item-genre">
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
                    }
                </div>
                <div className="game__item-buy">
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
};

export default GameItem;