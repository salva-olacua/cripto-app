import Quotes from "../components/quotes/Quotes";
import Title from "../components/title/Title";
import useCoins from "../hooks/useCoins";
import './App.css';

function App() {
  const coins = useCoins();

  return (
    <div className="App">
      <Title />
      <Quotes coins={Object.values(coins)} />
    </div>
  );
}

export default App;
