import Game from "./Game";
import Loader from "./Loader";
import AppProvider from "./AppProvider";
import Stage from "./Stage";

function App() {
  
  return (
    <AppProvider>
      <Loader />
      <Game />
      <Stage />
    </AppProvider>
  );
}

export default App;
