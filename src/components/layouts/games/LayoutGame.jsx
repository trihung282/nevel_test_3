import React from 'react';
import PropTypes from 'prop-types';
import dataGames from "./game.data";
import GameThumb from "./GameThumb";

const LayoutGame = props => {
    return (
        <div className='game'>
            <div className='game-header'>
                <h3 className='game-header--title'>Exclusive Games</h3>
                <button>
                    SEE ALL
                    <span className='glyphicon glyphicon-th' />
                </button>
            </div>
            <div className='game-content'>
                {dataGames.map(data => <GameThumb dataGame={data}/>)}
            </div>
        </div>
    );
};

LayoutGame.propTypes = {
    
};

export default LayoutGame;