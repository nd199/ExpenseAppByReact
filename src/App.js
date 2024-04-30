import Expenses from "./components/Expenses/Expenses";
import "./App.css";

function App() {
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1",{}, "Hello Naren"),
  //   React.createElement("h2", {}, "Expenses"),
  //   React.createElement(Expenses)
  // );

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Hello Naren</h1>
      <Expenses />
    </div>
  );
}

export default App;
