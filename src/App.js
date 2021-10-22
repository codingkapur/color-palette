import { useState } from "react";
import Colors from "./components/Colors";

function App() {
  const [currentColor, setCurrentColor] = useState("");
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState();

  //Create a regex express to test for valid Hex Color.
  const regex = new RegExp("^#([A-Fa-f0-9]{6})$");

  //Functions
  const validateInput = (input) => {
    setInput(input.toUpperCase().trim());
    //Should start with a # symbol, should only contain digits between 0-9 and alphabets between a-f, should be 7 chars in total.
    if (regex.test(input)) {
      setInputError(false);
    } else {
      setInputError(true);
    }
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    if(!inputError){
      setCurrentColor(input)
    }
    else {
      alert('That is not the right color')
      setInput('#');
      setCurrentColor('#')
    }
  };
  //Inline styling variables
  const borderColor = {
    border: `1px solid #${inputError ? "ff0000" : "00ff00"}`,
  };
  const backgroundColor= {
    backgroundColor: `${currentColor}`
  }



  return (
    <div className="app__container" style={backgroundColor}>
      <h1 className="app__title">Color Palette</h1>
      <div className="color__selector--container" >
        <form className="color__input--form " onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            value={input}
            placeholder="Enter Hex Value"
            className="color__input"
            onChange={(e) => validateInput(e.target.value)}
            style={borderColor}
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
