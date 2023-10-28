import Text from "../text.json";

interface Props
{
  bgAmount: number;
}

const genBackground = ({bgAmount}) => {
  const backgroundList: JSX.Element[] = [];
  for(let i = 1; i <= bgAmount; i++)
  {
    backgroundList.push(
    <div
    key={i}
    className="background-image"
    style={{backgroundImage: 'url(/home-background-'+ i +'.jpg)', top: (i - 1) * 100 + "vh"}}>
    </div>);
  }
  return(backgroundList);
}

function Home({bgAmount}: Props) {
  return (
    <div className="home-container" style={{height: bgAmount * 100 + "vh"}}>
      <div className="game-informations">
        <h1>{Text.Home.Title}</h1>
        <h3>{Text.Home.Description}</h3>
        <div className="game-info-button-container">
          <a href="#" className="button" style={{marginRight: "10px"}}>{Text.Home.ButtonOne}</a>
          <a href="#" className="button" style={{marginLeft: "10px"}}>{Text.Home.ButtonTwo}</a>
        </div>
      </div>
      {genBackground({bgAmount})}
    </div>
  )
}
export default Home