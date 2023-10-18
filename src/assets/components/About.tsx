import Text from "../text.json";
import Avatar from "/icon.svg";

function About() {
  return (
    <div className="background-image about-info-container" style={{backgroundImage: "url(/about-background.jpg)"}}>
      <div className="about-informations">
        <h1>{Text.About.Title}</h1>
        <h3>{Text.About.Description}</h3>
        <img src={Avatar}></img>
      </div>
    </div>
  )
}

export default About