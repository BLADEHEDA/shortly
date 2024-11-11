const baseButtonStyle = {
  background: "#2acfcf",
  borderRadius: "30px",
  width: "100%",
  padding: "1.5em",
  fontSize: "1.2em",
};

// Refactored button styles
export const buttonStyle = {
  ...baseButtonStyle,
};

export const desktopButtonStyle = {
  ...baseButtonStyle,
  padding: "1.2em",
};

export const formButtonStyle = {
  ...baseButtonStyle,
  borderRadius: "10px", 
  fontWeight: "900 !important",
};

export const heroButtonStyle = {
  ...baseButtonStyle,
  padding: "1.2em 1.5em", 
  boxSizing: "border-box",
};

export const shortenedButtonStyle = {
  ...baseButtonStyle,
  borderRadius: "10px",
  padding: "1em 2em", 
  fontSize: "1em", 
  fontWeight: "900 !important",
};
