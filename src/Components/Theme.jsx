import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        brand: {
            primary: "#FFFEFE",
            secondary: "#000001",
            outline: "#555555"
        },
    },
    typography: {
        fontFamily: [
          'sans-serif',
          'cursive',
        ].join(','),
      },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
              root: {
                backgroundColor: "#000001"
              },
              html: {
                  backgroundColor: "#000001"
              },
              body: {
                  backgroundColor: "#000001",
              },
            }
        },
    },
})