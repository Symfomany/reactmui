// Default theme https://material-ui.com/customization/default-theme/?expend-path=$.palette.primary

const theme = {
  palette: {
    primary: {
      light: "#c08e37",
      main: "#8c6100",
      dark: "#5b3700",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffff6e",
      main: "#cddc39",
      dark: "#99aa00",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161"
    },
    contrastThreshold: 3,
    text: {
      primary: "rgba(0, 0, 0, 1)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: "#fafafa"
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(0, 0, 0, 0.14)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)"
    },

    typography: {
      fontFamily: [
        "Roboto",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),

      fontSize: 18,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
      color: "rgba(0, 0, 0, 0.87)"
    },
    spacing: {
      unit: 8
    },
    zIndex: {
      mobileStepper: 1000,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    }
  },
  overrides: {}
};

export default theme;
