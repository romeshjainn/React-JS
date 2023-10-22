export const HeadingLabel = ({ label, fontSize, fontColor, fontWeight }) => {
  return (
    <h2
      style={{
        fontSize: `${fontSize}px`,
        color: `${fontColor}`,
        fontWeight: { fontWeight },
        padding: ".4rem",
      }}
    >
      {label}
    </h2>
  );
};
HeadingLabel.defaultProps = {
  fontSize: 16,
  fontColor: "red",
  fontWeight: 600,
};

// .........

export const InputBox = ({ inputType, placeHolder, validationFunction, inputValue}) => {
  return (
    <input
      type={inputType}
      placeholder={placeHolder}
      value={inputValue}
      onChange={validationFunction}
      style={{ padding: ".5rem", margin: ".5rem 0px", width: "100%" }}
    />
  );
};
InputBox.defaultProps = {
  inputType: "text",
  placeHolder: "Enter your name",
};
