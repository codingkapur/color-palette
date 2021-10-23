import React from "react";
import LightColors from "./LightColors";
import DarkColors from "./DarkColors";

const Colors = ({ lightList, darkList, originalColor, rgbToHex }) => {
    const backgroundColor = {
        backgroundColor: originalColor,
        boxShadow: "0px 10px 5px rgba(0,0,0,0.5)"
      };
  return (
    <div className="colors__container">
      {lightList.map((x, index) => {
        return <LightColors color={x} key={index} rgbToHex={rgbToHex}/>;
      })}
      <div className="color__container" style={backgroundColor}>
        <p className="color__intensity">Original Color</p>
        <p className="color__title">{originalColor.toUpperCase()}</p>
      </div>
      {darkList.map((x, index) => {
        return <DarkColors color={x} key={index} rgbToHex={rgbToHex}/>;
      })}
    </div>
  );
};

export default Colors;
