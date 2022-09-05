import React from 'react';
import { useSelector } from 'react-redux'
import GameBuy from '../gameBuy/GameBuy';
import GameCover from '../gameCover/GameCover';
import GameGenre from '../gameGenre/GameGenre';
import './GamePage.css'

const GamePage = () => {
    const game = useSelector(state => state.game.currentGame)

    if (!game) return null

    return (
        <div className='game__page'>
            <h1 className='game__page-title'>{game.title}</h1>
            <div className="game__page-content">
                <div className="game__page-left">
                    <iframe
                        width='90%'
                        height='400px'
                        src={game.video}
                        title='Youtube Video'
                        frameBorder='0'
                    ></iframe>
                </div>
                <div className="game__page-right">
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className="secondary__text">Популярные метки этого продукта:</p>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
                    <div className="game__page-buy-game">
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;