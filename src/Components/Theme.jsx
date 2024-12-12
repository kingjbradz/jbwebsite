import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        brand: {
            primary: "#FFFEFE",
            secondary: "#000001",
            outline: "#555555",
            particle: "#4AECFC"
        },
    },
    typography: {
        fontFamily: [
          '"Dosis"',
          'sans-serif',
        ].join(','),
      },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
              root: {
                backgroundColor: "#000001",
                fontFamily: '"Dosis", sans-serif'
              },
              html: {
                  backgroundColor: "#000001",
                  fontFamily: '"Dosis", sans-serif'
              },
              body: {
                  backgroundColor: "#000001",
                  fontFamily: '"Dosis", sans-serif'
              },
            }
        },
    },
})