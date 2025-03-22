import background1 from "../../../assets/game_thumbs/img_game_thumb_1.png";
import background2 from "../../../assets/game_thumbs/img_game_thumb_2.png";
import background3 from "../../../assets/game_thumbs/img_game_thumb_3.png";
import background4 from "../../../assets/game_thumbs/img_game_thumb_4.png";
import background5 from "../../../assets/game_thumbs/img_game_thumb_5.png";
import background6 from "../../../assets/game_thumbs/img_game_thumb_6.png";
import background7 from "../../../assets/game_thumbs/img_game_thumb_7.png";
import background8 from "../../../assets/game_thumbs/img_game_thumb_8.png";
import background9 from "../../../assets/game_thumbs/img_game_thumb_9.png";
import background10 from "../../../assets/game_thumbs/img_game_thumb_10.png";
import {GameTag} from "./game.const";


/**
 * @typedef GameData
 * @property {string} background
 * @property {GameTag} tag
 * @property {string} name
 */

const dataGames = [
    {
        background: background1,
        name: "100HP Gaming",
        tag: GameTag.HOT
    },
    {
        background: background2,
        name: "VERIPLAY",
        tag: GameTag.HOT
    },
    {
        background: background3,
        name: "EVOLUTION",
        tag: GameTag.NEW
    },
    {
        background: background4,
        name: "VERIPLAY",
        tag: GameTag.NEW
    },
    {
        background: background5,
        name: "ONLYPLAY",
        tag: GameTag.NONE
    },
    {
        background: background6,
        name: "VERIPLAY",
        tag: GameTag.NONE
    },
    {
        background: background7,
        name: "VERIPLAY",
        tag: GameTag.NONE
    },{
        background: background8,
        name: "VERIPLAY",
        tag: GameTag.HOT
    },{
        background: background9,
        name: "VERIPLAY",
        tag: GameTag.NONE
    },
    {
        background: background10,
        name: "VERIPLAY",
        tag: GameTag.NONE
    }
]

export default dataGames;