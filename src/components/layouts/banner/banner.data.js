import banner1 from "../../../assets/banners/img_banner_1.png"
import banner2 from "../../../assets/banners/img_banner_2.png"
import banner3 from "../../../assets/banners/img_banner_3.png"
import banner4 from "../../../assets/banners/img_banner_4.png"
import banner5 from "../../../assets/banners/img_banner_5.png"

/**
 * @typedef DataBanner
 * @property {string} bgStartColor
 * @property {string} bgEndColor
 * @property {string} tagTitle
 * @property {string} tagColor
 * @property {string} description
 * @property {string} subDescription
 * @property {string} buttonText
 * @property {string} buttonColor
 * @property {string} bannerImage
 */


/**
 *
 *@type {Array<DataBanner>}
 */
const dataBanners = [
    {
        bgStartColor: "#26002F",
        bgEndColor: "#590FB7",
        tagTitle: undefined,
        tagColor: undefined,
        description: "Up to €1,000 / 1 BTC",
        subDescription: "Increase your chances of winning big with a 400% welcome\n" +
        "bonus (up to €1,000 / 1 BTC). New players only. Bonus terms\n" +
        "apply.",
        buttonText: "400%",
        buttonColor: "red",
        bannerImage: banner1
    },
    {
        bgStartColor: "#0B467B",
        bgEndColor: "#041B2E",
        tagTitle: "Support Welcome Back",
        tagColor: "#FFFFFF",
        description: "Up to 300%",
        subDescription: "Boost your balance by getting a €60 FreeBet for the first 3 deposits\n" +
            "to win with favs at BlueChip. New players only.",
        buttonText: "Text",
        buttonColor: "red",
        bannerImage: banner2
    },
    {
        bgStartColor: "#147261",
        bgEndColor: "#082C25",
        tagTitle: "Exclusive Tournament",
        tagColor: "#147261",
        description: "Piggy Christmas Tap: €35,000 For Your Wins",
        subDescription: null,
        buttonText: "JOIN AND WIN",
        buttonColor: "#FF0960",
        bannerImage: banner3
    },
    {
        bgStartColor: "#284DCE",
        bgEndColor: "#0C1741",
        tagTitle: "CashBack",
        tagColor: "#284DCE",
        description: "Win or Get Back up to €100",
        subDescription: "See your best cashback offers for Slots, Live Games, and Crash\n" +
        "Games. Play and get your money back daily!",
        buttonText: "Discover More",
        buttonColor: "#FF0960",
        bannerImage: banner4
    },
    {
        bgStartColor: "#284DCE",
        bgEndColor: "#0C1741",
        tagTitle: null,
        tagColor: null,
        description: "Install Our App: Play fast and secure" ,
        subDescription:"Take your mobile app to the next level!",
        buttonText: "JOIN AND WIN",
        buttonColor: "#284DCE",
        bannerImage: banner5
    },

]

export default dataBanners;