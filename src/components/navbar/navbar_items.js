/**@typedef NavbarItem
 * @property {string} path
 * @property {string} name
 * @property {Element} component
 *
 * */

import {PATH} from "../../constants/app.constants";

/**@type {Array<NavbarItem>} */
const items = [
    {
        path: PATH.HOME,
        name: "Home"
    },
    {
        path: PATH.GAME,
        name: "Game"
    },
    {
        path: PATH.INFO,
        name: "Info"
    },
    {
        path: PATH.NEWS,
        name: "News"
    },
    {
        path: PATH.PROMOTIONS,
        name: "Promotions"
    },
    {
        path: PATH.VIP,
        name: "Vip"
    }
]

export default items;