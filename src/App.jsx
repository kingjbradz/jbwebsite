import { useState } from "react"
import { ThemeProvider, Box } from "@mui/material";
import { lightTheme } from "./Components/LightTheme";
import { lightTheme as darkTheme } from "./Components/DarkTheme";
import Navbar from "./Components/Navbar";
import Router from "./Components/Router";

function App() {
  const [themeMode, setThemeMode] = useState(false)
  const [noShow, setNoShow] = useState(false)
  return ( 
    <ThemeProvider 
    theme={!themeMode ? lightTheme : darkTheme}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Navbar themeMode={themeMode} setThemeMode={setThemeMode} noShow={noShow} setNoShow={setNoShow} />
        <Router themeMode={themeMode} noShow={noShow} setNoShow={setNoShow} />   
      </Box>
    </ThemeProvider>
  );
}

export default App;
