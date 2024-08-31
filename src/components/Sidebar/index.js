import { Component } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { CgPlayButtonR } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

class Sidebar extends Component{
    render(){
        const {showhide} = this.props
        const style = showhide ? "sidebar " : "hide"
        const {isdarktheme} = this.props
        const darkicon = isdarktheme ? 'darktheme-icons' : 'icon' ;
        const themeoptions = isdarktheme ? 'darkthemeoptions_container' : '';
        return(
            <div className={style} >
                <div>
                    <Link to='/' className="link_buttons">
                    <div className= {`options-container ${themeoptions}`} >
                        <GoHomeFill className={darkicon}/>
                        <p className ="options">Home</p>
                    </div>
                    </Link> 
                    <Link to='/shorts' className="link_buttons">
                        <div className={`options-container ${themeoptions}`}  >
                            <SiYoutubeshorts className={darkicon}/>
                            <p className ="options">Shorts </p>
                        </div>
                    </Link> 
                    <Link to='/subscriptions' className="link_buttons">
                    <div className={`options-container ${themeoptions}`}  >
                        <MdOutlineSubscriptions className={darkicon}/>
                        <p className ="options">Subscriptions</p>
                    </div>
                    </Link> 
                    <hr/>
                    <h4>You </h4>
                    <Link to='/yourchannel' className="link_buttons">
                    <div className={`options-container ${themeoptions}`} >
                        <BiSolidUserAccount className={darkicon}/>
                        <p className ="options">Your Channel</p>
                    </div>
                    </Link>
                    <Link to='/history' className="link_buttons">
                    <div className={`options-container ${themeoptions}`}  >
                        <LuHistory className={darkicon}/>
                        <p className ="options"> History</p> 
                    </div>
                    </Link>
                    <Link to='/playlist' className="link_buttons">
                    <div className={`options-container ${themeoptions}`} >
                        <CgPlayList className={darkicon}/>
                        <p className ="options"> Playlist</p>
                    </div>
                    </Link>
                    <Link to='/yourvideos' className="link_buttons">
                    <div className={`options-container ${themeoptions}`}  >
                        <CgPlayButtonR className={darkicon}/>
                        <p className ="options"> Your Videos</p>
                    </div>
                    </Link>
                    <Link to='/likedvideos' className="link_buttons">
                    <div className={`options-container ${themeoptions}`} >
                        <AiOutlineLike className={darkicon}/>
                        <p className ="options"> Liked Videos</p>
                    </div>
                    </Link>
                    
                </div>
                <Link to='/settings' className="link_buttons">
                <div className={`options-container ${themeoptions}`} >
                    <IoSettingsOutline className={darkicon}/>
                    <p className ="options">Settings</p>
                </div>
                </Link>
            </div>
        )
    }
}

export default Sidebar

