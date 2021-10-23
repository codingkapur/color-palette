const DarkColors = ({ color, index, rgbToHex, clickToCopy }) => {
  const backgroundColor = {
    backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
  };

  const hexColor = rgbToHex(color);
  return (
    <div className="color__container" style={backgroundColor} onClick={()=> clickToCopy(hexColor)}>
      <p className="color__intensity">{color[3]}% Darker</p>
      <p className="color__title">#{hexColor}</p>
    </div>
  );
};

export default DarkColors;
