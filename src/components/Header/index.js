
import './index.css'
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = props => {
    const {showsidebar, toggleSidebar} = props
    const onClickbar = () => {
        console.log(showsidebar, "called")
        toggleSidebar();
    }
    return (
        <div className="header">
            <div className="header-logo-container">
                <div>
                    <button onClick={onClickbar} ><RxHamburgerMenu className="side-bar-btn"/></button>
                </div>
                <div className='logo-sec'>
                    <h1 className="youtube_title"><Link to='/' className="link_buttons">AdaptNxt</Link></h1>    
                </div>
            </div>
        </div>
        )
}

export default Header
