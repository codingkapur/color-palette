const DarkColors = ({ color, index }) => {
  const backgroundColor = {
    backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
  };

  return (
    <div className="color__container" style={backgroundColor}>
      <p className="color__intensity">{color[3]}% Darker</p>
      <p className="color__title">{`RGB(${color[0]}, ${color[1]}, ${color[2]})`}</p>
    </div>
  );
};

export default DarkColors;
