import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        brand: {
            primary: "#FFFEFE",
            secondary: "#000001",
            blorange: "#AB4F46",
            neopink: "#E274E7",
            neoyellow: "#DCF45C",
            lineblue: "#3C67D1",
            outline: "#3C67D1",
            logogrey: "#949494"
        },
        outline: {
            main: "#3C67D1"
        }
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
                
            }
        },
    },
    // MuiTypography: {
    //     root: {
    //        fontFamily: '"Cooper Hewitt", sans-serif'
    //     },
    //     html: {
    //        fontFamily: '"Cooper Hewitt", sans-serif'
    //     },
    //     body: {
    //        fontFamily: '"Cooper Hewitt", sans-serif'
    //     },
    // }
})