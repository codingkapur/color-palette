const LightColors = ({ color, index , rgbToHex}) => {

   const backgroundColor = {
       backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
   }
   
  return (
    <div className="color__container" style={backgroundColor}>
      <p className="color__intensity">{color[3]}% Lighter</p>
      <p className="color__title">#{rgbToHex(color)}</p>
    </div>
  );
};

export default LightColors;
