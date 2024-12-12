import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  IconButton,
  Box,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";

const SocialLinks = () => {
  const is950 = useMediaQuery("( min-width: 950px )");
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: is950 ? "row-reverse" : "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          onClick={() =>
            window.open("https://github.com/kingjbradz", "_blank")
          }
        >
          <Icon icon="mdi:github" color={theme.palette.brand.primary} />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open("https://www.linkedin.com/in/jordanbradley92/", "_blank")
          }
        >
          <Icon icon="mdi:linkedin" color={theme.palette.brand.primary} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SocialLinks;
