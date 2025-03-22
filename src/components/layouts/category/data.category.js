import iconDiamond from "../../../assets/icons/icon_diamond.png";
import iconVip from "../../../assets/icons/icon_vip.png";
import iconPromotion from "../../../assets/icons/icon_promotion.png";
import iconHotMatch from "../../../assets/icons/icon_ball.png";
import iconP2P from "../../../assets/icons/icon_p2p.png";
import iconGames from "../../../assets/icons/icon_game.svg";
import iconProviders from "../../../assets/icons/icon_provider.png";

/**
 * @typedef Category
 * @property {string} icon
 * @property {string} name
 * @property {boolean} active
 */

/**
 *
 * @type {Array<Category>}
 */
const dataCategories = [
    {
        icon: iconDiamond,
        name: "Diamond mine",
        active: false
    },
    {
        icon: iconVip,
        name: "VIP",
        active: false
    },
    {
        icon: iconPromotion,
        name: "Promotion",
        active: false
    },
    {
        icon: iconHotMatch,
        name: "Hot Match",
        active: false
    },
    {
        icon: iconP2P,
        name: "P2P Transaction",
        active: false
    },
    {
        icon: iconGames,
        name: "Games",
        active: true
    },
    {
        icon: iconProviders,
        name: "Providers",
        active: true
    }
]

export default dataCategories;