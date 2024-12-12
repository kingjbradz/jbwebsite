import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Box, useMediaQuery } from "@mui/material";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import App404 from "../Pages/App404";

const Router = ({ setNoShow }) => {
  const location = useLocation();
  const is530 = useMediaQuery("( min-width: 430px )")
  const padding = is530 && 4
  return (
    <Box
      sx={{
        height: is530 ? "100%" : "auto",
        paddingTop: location.pathname === "/" && is530 && "64px",
        flexGrow: "1",
        overflow: "auto",
        "-ms-overflow-style": "none" /* Hide scrollbars - IE and Edge */,
        "scrollbar-width": "none" /* Hide scrollbars - Firefox */,
        "::-webkit-scrollbar": {
          width: "8px",
          marginLeft: "0.5rem",
        },
        "::-webkit-scrollbar-track": {
          boxShadow: "none",
          background: "none",
          border: "none",
        },
        "::-webkit-scrollbar-thumb": {
          background: (theme) => theme.palette.brand.secondary,
          borderRadius: "8px",
          backgroundClip: "padding-box",
          borderRight: "0.75px white solid",
        },
      }}
    >
      <Routes>
        <Route
          path="/"
          element={<Home noShow={setNoShow(false)} padding={padding}  />}
        />
        <Route
          path="/about"
          element={
            <About noShow={setNoShow(false)} padding={padding} />
          }
        />
        <Route
          path="/contact"
          element={<Contact noShow={setNoShow(false)} padding={padding} />}
        />
        <Route
          path="/*"
          element={<App404 noShow={setNoShow(false)} padding={padding} />}
        />
      </Routes>
    </Box>
  );
};

export default Router;
