import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        brand: {
            primary: "#000001",
            secondary: "#FFFEFE",
            blorange: "#AB4F46",
            neopink: "#E274E7",
            neoyellow: "#DCF45C",
            lineblue: "#3C67D1",
            outline: "#AB4F46",
            logogrey: "#949494"
        },
        outline: {
            main: "#949494"
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
                root: {
                    backgroundColor: "#000001"
                },
                html: {
                    backgroundColor: "#000001"
                },
                body: {
                    backgroundColor: "#000001"
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
        },
    },
})