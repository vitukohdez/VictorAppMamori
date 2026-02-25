const tintColorLight = "#2ABB9B"; // the green of the desgins, the const stablish one global const for the color to not have to change
// all of them

export default {
  // different modes, light and dark one.
  light: {
    text: "#000",
    background: "#FDFCF0", // fondo
    tint: tintColorLight, // tint
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },

  primary: "#2ABB9B",
  secondary: "#FF7A5C",
};
