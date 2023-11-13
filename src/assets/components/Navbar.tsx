import { Link } from 'react-router-dom';
import Text from "../text.json"
import WebIcon from "/icon.svg";
import SteamIcon from "/steam-icon.svg";
import MetaIcon from "/meta-icon.svg";
import YoutubeIcon from "/youtube-icon.svg";
import InfoIcon from "/info-icon.svg";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
}

function Navbar () {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="website-logo" onClick={() => ScrollToTop()}>
          <p>
            <img src={WebIcon}></img>
            <span style={{color: "#FBAF5E"}}>{Text.Navbar.Title.WordOne}</span>
            {Text.Navbar.Title.WordTwo}
          </p>
        </Link>
        <li><a href="#"><img src={SteamIcon}></img></a></li>
        <li><a href="#"><img src={MetaIcon}></img></a></li>
        <li><a href="https://www.youtube.com/@TacticalNounours"><img src={YoutubeIcon}></img></a></li>
        <li className="info-icon-separator"></li>
        <li onClick={() => ScrollToTop()}><Link to="/about"><img src={InfoIcon}></img></Link></li>
      </nav>
    </>
  );
}

export default Navbar;
