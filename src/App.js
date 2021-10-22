import Colors from "./components/Colors";

function App() {
  return (
    <div className="app__container">
      <h1 className="app__title">Color Palette</h1>
      <div className="color__selector--container">
        <form className="color__input--form">
          <input
            type="text"
            placeholder="Enter Hex Value"
            className="color__input"
          />
          <button className="btn submit-btn">Submit</button>
        </form>
        <button className="btn randomize-btn">Random Color</button>
      </div>
      <Colors />
    </div>
  );
}

export default App;
