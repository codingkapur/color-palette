import { useState } from "react";
import Colors from "./components/Colors";

function App() {
  //State Values
  const [currentColor, setCurrentColor] = useState("#1266CF");
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(true);
  const [lightList, setLightList] = useState([]);
  const [darkList, setDarkList] = useState([]);

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
    if (!inputError) {
      setCurrentColor(input);
      setLightList(lighterColorsArray());
      setDarkList(darkerColorsArray());
    } else {
      alert("Check the input, fool!");
      setInput("#");
      setCurrentColor("#");
    }
  };

  //Inline styling variables
  const borderColor = {
    borderBottom: `3px solid #${inputError ? "ff0000" : "00ff00"}`,
  };
  const backgroundColor = {
    backgroundColor: `${currentColor}`,
  };

  //HEX TO RGB FUNCTION
  const hexToRgb = (hex) => {
    //Remove the # sign
    const noHashHex = hex.slice(1);
    //Create an array of length 3 for r, g and b in hex
    let hexArray = [];
    let rgb = [];
    for (let i = 0; i <= 4; ) {
      hexArray.push(noHashHex.slice(i, i + 2));
      i = i + 2;
    }
    for (let i = 0; i < 3; i++) {
      rgb.push(parseInt(hexArray[i], 16));
    }
    return rgb;
  };

  const rgbToHex = (rgb) => {
    const hexArr = [];
    for (let i = 0; i < 3; i++) {
      hexArr.push(parseInt(rgb[i]).toString(16).padStart(2, '0'));
    }
    return hexArr.join("").toUpperCase();
  };

  const randomizeColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; i++) {
      rgb.push(Math.ceil(Math.random() * 255));
    }
    const hex = rgbToHex(rgb);
    setInput(hex.padStart(7, "#"));
    setInputError(false);
    setCurrentColor(input);
    setLightList(lighterColorsArray());
    setDarkList(darkerColorsArray());
  };

  const clickToCopy = (colorHex) => {
    const color = `#${colorHex}`;
    navigator.clipboard.writeText(color)
  }

  //Create Arrays of tints
  const lighterColorsArray = () => {
    const RGB = hexToRgb(input);
    // console.log(RGB);
    const lightArray = [];

    let i = 10;
    while (
      RGB[0] + (RGB[0] * i) / 100 <= 255 &&
      RGB[1] + (RGB[1] * i) / 100 <= 255 &&
      RGB[2] + (RGB[2] * i) / 100 <= 255
    ) {
      let colorValues = [];

      colorValues.push(Math.round(RGB[0] + (RGB[0] * i) / 100));
      colorValues.push(Math.round(RGB[1] + (RGB[1] * i) / 100));
      colorValues.push(Math.round(RGB[2] + (RGB[2] * i) / 100));
      colorValues.push(i);

      lightArray.push(colorValues);
      i = i + 10;

      colorValues = [];

      if (i >= 110) {
        break;
      }
    }
    return lightArray.reverse();
  };

  //Create Arrays of shades
  const darkerColorsArray = () => {
    const RGB = hexToRgb(input);
    console.log(RGB);
    const darkArray = [];

    let i = 10;
    while (
      RGB[0] - (RGB[0] * i) / 100 >= 0 &&
      RGB[1] - (RGB[1] * i) / 100 >= 0 &&
      RGB[2] - (RGB[2] * i) / 100 >= 0
    ) {
      let colorValues = [];

      colorValues.push(Math.round(RGB[0] - (RGB[0] * i) / 100));
      colorValues.push(Math.round(RGB[1] - (RGB[1] * i) / 100));
      colorValues.push(Math.round(RGB[2] - (RGB[2] * i) / 100));
      colorValues.push(i);

      darkArray.push(colorValues);
      i = i + 10;

      colorValues = [];

      if (i >= 110) {
        break;
      }
    }
    return darkArray;
  };

  return (
    <div className="app__container" style={backgroundColor}>
      <h1 className="app__title">Color Palette</h1>
      <div className="color__selector--container">
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
        <button className="btn randomize-btn" onClick={() => randomizeColor()}>
          Random Color
        </button>
      </div>
      <Colors
        lightList={lightList}
        darkList={darkList}
        originalColor={currentColor}
        rgbToHex={rgbToHex}
        clickToCopy={clickToCopy}
      />
    </div>
  );
}

export default App;
