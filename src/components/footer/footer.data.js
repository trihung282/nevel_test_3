import iconTelegram from "../../assets/icons/icon_telegram.svg";
import iconFacebook from "../../assets/icons/icon_facebook.svg";
import iconInstagram from "../../assets/icons/icon_instagram.svg";
import iconTwitter from "../../assets/icons/icon_twitter.svg";
import iconApple from "../../assets/icons/icon_apple.svg";
import iconAndroid from "../../assets/icons/icon_android.svg";


const footerGames = [
    "Game 1",
    "Game 2",
    "Game 3",
    "Game 14"
]

const footerAbouts = [
    "About Us",
    "Promotions",
    "VIP",
    "Help Center",
    "Awards & Certificates",
    "App"
]

const footerLegalInformations = [
    "General Terms & Conditions",
    "Responsible Gaming Policy",
    "Sports Betting Rules",
    "Privacy and Cookies Policy",
    "Payment Methods",
    "Limits"
]

/**@typedef ScoialItem
 * @property {string} name
 * @property {string} icon
 * */

/**
 *
 * @type {Array<ScoialItem>}
 */
const footerSocials = [
    {
        name: "Telegram",
        icon: iconTelegram
    },
    {
        name: "Facebook",
        icon: iconFacebook
    },
    {
        name: "Instagram",
        icon: iconInstagram
    }, {
        name: "Twitter",
        icon: iconTwitter
    }
]

/**@typedef DeviceItem
 * @property {string} name
 * @property {string} icon
 * @property {string} description
 * */

/**
 *
 * @type {Array<DeviceItem>}
 */
const footerDevices = [
    {
        icon: iconAndroid,
        name: "Android",
        description: "for Android"
    },
    {
        icon: iconApple,
        name: "IOS",
        description: "for IOS"
    }
]

export {
    footerGames,
    footerAbouts,
    footerLegalInformations,
    footerSocials,
    footerDevices
}