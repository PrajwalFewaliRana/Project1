import { CiSearch } from "react-icons/ci";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { MdVolumeOff, MdOutlineExplore } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { RiMessengerLine, RiChat3Line } from "react-icons/ri";
import { TbSquarePlus } from "react-icons/tb";
import { VscCircleLarge, VscSmiley } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiBookmark, BiDotsHorizontalRounded } from "react-icons/bi";
import { IoIosSquare } from "react-icons/io";
import { SlPaperPlane } from "react-icons/sl";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";

export const links = [
  {
    name:"About",
    icon:<IoIosSquare />,
    link:"https://about.instagram.com/",
  },
  {
    name:"Help",
    icon:<IoIosSquare />,
    link:"https://help.instagram.com/",
  },
  {
    name:"Press",
    icon:<IoIosSquare />,
    link:"https://about.instagram.com/blog",
  },
  {
    name:"API",
    icon:<IoIosSquare />,
    link:"https://developers.facebook.com/docs/instagram",
  },
  {
    name:"Jobs",
    icon:<IoIosSquare />,
    link:"https://about.instagram.com/about-us/careers",
  },
  {
    name:"Privacy",
    icon:<IoIosSquare />,
    link:"https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect",
  },
  {
    name:"Terms",
    icon:<IoIosSquare />,
    link:"https://help.instagram.com/581066165581870/"
  },
  {
    name:"Locations",
    icon:<IoIosSquare />,
    link:"https://www.instagram.com/explore/locations/"
  },
  {
    name:"Language",
    icon:<IoIosSquare />
  },
  {
    name:"Meta Verified",
    link:"https://about.meta.com/technologies/meta-verified/",
  },
]

export const suggestions = [
  {
    id:7,
    name:"Ronaldo",
    text:"Suggested for you",
    follow:"Follow",
    img:img11,
  },
  {
    id:30,
    name:"Messi",
    text:"Suggested for you",
    follow:"Follow",
    img:img13,
  },
  {
    id:11,
    name:"Neymar",
    text:"Suggested for you",
    follow:"Follow",
    img:img15,
  },
  {
    id:9,
    name:"Haaland",
    text:"Suggested for you",
    follow:"Follow",
    img:img17,
  },
  {
    id:10,
    name:"Mbappe",
    text:"Suggested for you",
    follow:"Follow",
    img:img21,
  },
]

export const navbarapi = [
  {
    id: "home",
    title: "Home",
    link: "/",
    icon: <AiFillHome />,
  },
  {
    id: "search",
    title: "Search",
    link: "/",
    icon: <CiSearch />,
  },
  {
    id: "explore",
    title: "Explore",
    link: "/explore",
    icon: <MdOutlineExplore />,
  },
  {
    id: "reels",
    title: "Reels",
    link: "/reels",
    icon: <BsCollectionPlay />,
  },
  {
    id: "messages",
    title: "Messages",
    link: "/messages",
    icon: <RiMessengerLine />,
  },
  {
    id: "notifications",
    title: "Notifications",
    link: "/",
    icon: <AiOutlineHeart />,
  },
  {
    id: "create",
    title: "Create",
    link: "/create",
    icon: <TbSquarePlus />,
  },
  {
    id: "profile",
    title: "Profile",
    link: "/profile",
    icon: <VscCircleLarge />,
  },
  {
    id: "more",
    title: "More",
    link: "/",
    icon: <RxHamburgerMenu />,
  },
];

export const personsapi = [
  {
    name: "Oliver Ragfelt",
    profile: img1,
    posts: img1,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "120 likes",
  },
  {
    name: "Anthony Tran",
    profile: img2,
    posts: img2,
    time: "4 h",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "1,675 likes",
  },
  {
    name: "Ali Solemani",
    profile: img3,
    posts: img3,
    time: "4 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "335 likes",
  },
  {
    name: "Shobhan Jodi",
    profile: img4,
    posts: img4,
    time: "3 h",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "1,200 likes",
  },
  {
    name: "Mael Baaland",
    profile: img5,
    posts: img5,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "1298 likes",
  },
  {
    name: "Navid",
    profile: img6,
    posts: img6,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "2,340 likes",
  },
  {
    name: "Arul Lin",
    profile: img7,
    posts: img7,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "500 likes",
  },
  {
    name: "Farrinni",
    profile: img8,
    posts: img8,
    time: "2 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "12,800 likes",
  },
  {
    name: "Robert Nelson",
    profile: img9,
    posts: img9,
    time: "12 h",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "4,400 likes",
  },
  {
    name: "Omid Armin",
    profile: img10,
    posts: img10,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "1,600 likes",
  },
  {
    name: "Harry",
    profile: img11,
    posts: img11,
    time: "3 h",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "1,100 likes",
  },
  {
    name: "Mikasha",
    profile: img12,
    posts: img12,
    time: "3 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "2,342 likes",
  },
  {
    name: "Wassim Chouk",
    profile: img13,
    posts: img13,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "3,500 likes",
  },
  {
    name: "Ogunsendi",
    profile: img14,
    posts: img14,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "120 likes",
  },
  {
    name: "Kamran Ch",
    profile: img15,
    posts: img15,
    time: "2 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "4,000 likes",
  },
  {
    name: "Sonnie Hiles",
    profile: img16,
    posts: img16,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "120 likes",
  },
  {
    name: "Naruto",
    profile: img17,
    posts: img17,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "5,000 likes",
  },
  {
    name: "Mellisa Askew",
    profile: img18,
    posts: img18,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "1,200 likes",
  },
  {
    name: "Itachi Uchiha",
    profile: img19,
    posts: img19,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "4,555 likes",
  },
  {
    name: "Sakura",
    profile: img20,
    posts: img20,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "1,200 likes",
  },
  {
    name: "Sasuke Uchiha",
    profile: img21,
    posts: img21,
    time: "1 d",
    icon1: <IoIosSquare />,
    icon2: <BiDotsHorizontalRounded />,
    icon4: <AiOutlineHeart />,
    icon5: <RiChat3Line />,
    icon6: <SlPaperPlane />,
    icon7: <BiBookmark />,
    icon8: <VscSmiley />,
    icon9: <MdVolumeOff />,
    likes: "1,440 likes",
  },
];
