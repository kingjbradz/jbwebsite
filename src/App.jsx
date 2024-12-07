import { useState } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { lightTheme } from "./Components/LightTheme";
import { lightTheme as darkTheme } from "./Components/DarkTheme";
import Navbar from "./Components/Navbar";
import Router from "./Components/Router";
import SphereInPyramid from "./Components/SphereInPyramid";

function App() {
  const [themeMode, setThemeMode] = useState(false);
  const [noShow, setNoShow] = useState(false);

  return (
    <ThemeProvider theme={!themeMode ? lightTheme : darkTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Navbar */}
        <Navbar
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          noShow={noShow}
          setNoShow={setNoShow}
        />
        {/* Main content */}
        <Box
          sx={{
            display: 'flex',
            flex: 1, // Ensures it fills the remaining height
            flexDirection: { xs: 'column', md: 'row' }, // Stacks on small screens
            gap: 2, // Space between components
            padding: 2,
            bgcolor: "brand.secondary",
            color: "brand.primary"
          }}
        >
          {/* Router Section */}
          <Box
            sx={{
              flex: 1, // Takes up equal space with SphereInPyramid
              minHeight: 0, // Allows proper flex child behavior
            }}
          >
            <Router
              themeMode={themeMode}
              noShow={noShow}
              setNoShow={setNoShow}
            />
          </Box>
          {/* SphereInPyramid Section */}
          <Box
            sx={{
              flex: 1, // Takes up equal space with Router
              minHeight: 0, // Allows proper flex child behavior
            }}
          >
            <SphereInPyramid />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
