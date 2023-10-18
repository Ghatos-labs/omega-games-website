import { Link } from 'react-router-dom';
import WebIcon from "/src/assets/images/icon.svg";
import SteamIcon from "/src/assets/images/steam-icon.svg";
import MetaIcon from "/src/assets/images/meta-icon.svg";
import YoutubeIcon from "/src/assets/images/youtube-icon.svg";
import InfoIcon from "/src/assets/images/info-icon.svg";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
}

function Navbar () {
  return (
    <>
      <nav className="navbar">
        <li className="website-logo" onClick={() => ScrollToTop()}><Link to="/"><img src={WebIcon}></img></Link></li>
        <li><a href="#"><img src={SteamIcon}></img></a></li>
        <li><a href="#"><img src={MetaIcon}></img></a></li>
        <li><a href="#"><img src={YoutubeIcon}></img></a></li>
        <li className="info-icon-separator"></li>
        <li onClick={() => ScrollToTop()}><Link to="/about"><img src={InfoIcon}></img></Link></li>
      </nav>
    </>
  );
}

export default Navbar;
