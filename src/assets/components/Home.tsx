import Text from "../text.json";

interface Props
{
  bgAmount: number;
}

const genBackground = (amount: number) => {
  const backgroundList: JSX.Element[] = [];
  for(let i = 1; i <= amount; i++)
  {
    backgroundList.push(
    <div
    key={i}
    className="background-image"
    style={{backgroundImage: 'url(/src/assets/images/home-background-'+ i +'.jpg)', top: (i - 1) * 100 + "vh"}}>
    </div>);
  }
  return(backgroundList);
}

function Home(props: Props) {
  return (
    <div className="home-container" style={{height: props.bgAmount * 100 + "vh"}}>
      <div className="game-informations">
        <h1>{Text.Home.Title}</h1>
        <h3>{Text.Home.Description}</h3>
        <a href="#" className="button">{Text.Home.Button}</a>
      </div>
      {genBackground(props.bgAmount)}
    </div>
  )
}
export default Home