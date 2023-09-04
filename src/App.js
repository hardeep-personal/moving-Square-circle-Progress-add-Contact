import AddContact from "./Components/AddContact/AddContact";
import CircleProgress from "./Components/CircleProgress/CircleProgress";
import MovingSquare from "./Components/MovingSquare/MovingSquare";

function App() {
  return (
    <div className="App ">
      <div className="flex justify-center">
        <MovingSquare />
        <CircleProgress />
      </div>
      <AddContact />
    </div>
  );
}

export default App;
