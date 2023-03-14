import Game from "./Game";
import Loader from "./Loader";
import AppProvider from "./AppProvider";

function App() {
  
  return (
    <AppProvider>
      <Loader />
      <Game />
    </AppProvider>
  );
}

export default App;
