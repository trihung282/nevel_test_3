import React from 'react';
import {GameTag} from "./game.const";

import tagNew from "../../../assets/icons/icon_new_tag.svg";
import tagHot from "../../../assets/icons/icon_hot_tag.svg";

import "./game.css";

/**
 *
 * @param {GameData} dataGame
 * @param props
 * @returns {Element}
 * @constructor
 */
const GameThumb = ({dataGame, ...props}) => {

    const getGameTagSrc = (tag) => {
        switch (tag) {
            case GameTag.HOT:
                return tagHot;
            case GameTag.NEW:
                return tagNew;
            default:
                return null;
        }
    }

    const srcTag = getGameTagSrc(dataGame.tag);

    return (
        <div className='game-thumb ' style={{backgroundImage: dataGame.background}}>
            {srcTag && <img src={srcTag} className='game-tag' alt=''/>}
            <span className='game-name'>{dataGame.name}</span>
        </div>
    );
};

GameThumb.propTypes = {};

export default GameThumb;