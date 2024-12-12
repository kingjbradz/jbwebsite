import { useState } from "react";
import { ThemeProvider, Box, useMediaQuery } from "@mui/material";
import { theme } from "./Components/Theme";
import Navbar from "./Components/Navbar";
import Router from "./Components/Router";
import SphereInPyramid from "./Components/SphereInPyramid";

function App() {
  const [noShow, setNoShow] = useState(false);
  const is530 = useMediaQuery("( min-width: 530px )")
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Navbar */}
        <Navbar
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
              flex: is530 && 1, // Takes up equal space with SphereInPyramid
              minHeight: is530 && 0, // Allows proper flex child behavior
            }}
          >
            <Router
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
