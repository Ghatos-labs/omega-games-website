import Text from "../text.json";
import SteamIcon from "/src/assets/images/steam-icon.svg";
import MetaIcon from "/src/assets/images/meta-icon.svg";
import DiscordIcon from "/src/assets/images/discord-icon.svg";
import ArtstationIcon from "/src/assets/images/artstation-icon.svg";
import YoutubeIcon from "/src/assets/images/youtube-icon.svg";

function Footer () {
  return (
    <footer>
        <div>
            <h3>{Text.Footer.LeftSide.Title}</h3>
            <span>
              <img className="footer-icon" src={SteamIcon}></img>
              <a href="#" className="text-link">{Text.Footer.LeftSide.element1}</a>
            </span>
            <span>
              <img className="footer-icon" src={MetaIcon}></img>
              <a href="#" className="text-link">{Text.Footer.LeftSide.element2}</a>
            </span>
        </div>
        <div>
            <h3>{Text.Footer.RightSide.Title}</h3>
            <span>
              <img className="footer-icon" src={DiscordIcon}></img>
              <a href="#" className="text-link">{Text.Footer.RightSide.element1}</a>
            </span>
            <span>
              <img className="footer-icon" src={ArtstationIcon}></img>
              <a href="#" className="text-link">{Text.Footer.RightSide.element2}</a>
            </span>
            <span>
              <img className="footer-icon" src={YoutubeIcon}></img>
              <a href="#" className="text-link">{Text.Footer.RightSide.element3}</a>
            </span>
        </div>
        <div className="footer-bottom-zone">
          <p>{Text.Footer.Description}</p>
        </div>
    </footer>
  )
}

export default Footer