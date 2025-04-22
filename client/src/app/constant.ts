import colors from "tailwindcss/colors";

const baseColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  
  const shadeMapping = {
    "50": "900",
    "100": "800",
    "200": "700",
    "300": "600",
    "400": "500",
    "500": "400",
    "600": "300",
    "700": "200",
    "800": "100",
    "900": "50",
  };

  const generateThemeObject = (colors:any, mapping: any, invert = false) => {
    const theme: any = {};
    baseColors.forEach((color) => {
      theme[color] = {};
      Object.entries(mapping).forEach(([key, value]: any) => {
        const shadeKey = invert ? value : key;
        theme[color][key] = colors[color][shadeKey];
      });
    });
    return theme;
  };
  
  const lightTheme = generateThemeObject(colors, shadeMapping);
  const darkTheme = generateThemeObject(colors, shadeMapping, true);