import './insta.css'
import {AiFillHome,AiOutlineMessage,AiOutlineHeart,AiOutlinePlusCircle} from "react-icons/ai"
import {BsSearch,BsInstagram} from "react-icons/bs"
import {MdOutlineExplore} from "react-icons/md"
import {BiMoviePlay} from "react-icons/bi"
import {CgProfile,CgDetailsMore} from "react-icons/cg"

function Insta(){
    return(
        <div className='rah'>
            <div className='instaHome'>
                <center>
                <BsInstagram className='insta' size={24}/>
                </center>
                <img src="image/instagram2.png" alt="++" height={29} width={103}/>
            </div>
            <div className="insta-btn">
                <div className="btnnn" id='home'>
                    <AiFillHome size={26}/>
                </div>
                <div className='btnn2'>
                    <h4 className='homebtn' >Home</h4>
                </div>
            </div>
            <div className="insta-btn2" >
                <div className="btnnn" id='search'>
                    <BsSearch size={24}/>
                </div>
                <div className='btnn2'>
                    <h4 className='homebtn'>Search</h4>
                </div>
            </div>
            <div className="insta-btn2">
                <div className="btnnn" id='explore'>
                    <MdOutlineExplore size={26}/>
                </div>
                <div className='btnn2'>
                    <h4 className='homebtn'>Explore</h4>
                </div>
            </div>
            <div className="insta-btn2">
                <div className="btnnn" id='reels'>
                    <BiMoviePlay size={26}/>
                </div>
                <div className='btnn2'>
                    <h4 className='homebtn'>Reels</h4>
                </div>
            </div>
            <div className="insta-btn2">
                <div className="btnnn" id='msg'>
                    <AiOutlineMessage size={26}/>
                </div>
                <div className='btnn2'>
                    <h4 className='homebtn'>Messages</h4>
                </div>
            </div>
            <div className="insta-btn2">
                <div className="btnnn" id='rrrr'>
                    <AiOutlineHeart size={26}/>
                </div>
                <div className='btnn2'>
                    <h4 className='homebtn'>Notifications</h4>
                </div>
            </div>
            <div className="insta-btn2">
                <div className="btnnn" id="qqqwww">
                    <AiOutlinePlusCircle size={26}/>
                </div>
                <div className='btnn2'>
                    <h4 className='homebtn'>Create</h4>
                </div>
            </div>
            <div className="insta-btn2">
                <div className="btnnn" id='profile'>
                    <CgProfile size={26}/>
                </div>
                <div className='btnn2'>
                    <h4 className='homebtn'>Profile</h4>
                </div>
            </div>
            <div className="insta-btn3">
                <div className="btnnn" id='more'>
                    <CgDetailsMore size={26}/>
                </div>
                <div className='btnn2' id="qwee">
                    <h4 className='homebtn'>More</h4>
                </div>
            </div>
        </div>
       
    )
}

export default Insta;

