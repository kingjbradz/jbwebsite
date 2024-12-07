import React from "react";
import { Typography, useMediaQuery, Stack } from "@mui/material";
import { LineBox, RowBox } from "../Components/Elements";

const About = ({ themeMode }) => {
  const is335 = useMediaQuery("( min-width: 335px )");
  const is750 = useMediaQuery("( min-width: 750px )");
  const is1000 = useMediaQuery("( min-width: 1000px )");
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: is335 ? "100%" : "auto" }}
      >
        <LineBox sx={{ flexDirection: !is1000 && "column-reverse", marginBottom: 0 }}>
          <RowBox>
            <Typography
              variant="h4"
              // sx={{
              //   color: "brand.secondary",
              //   width: is750 ? 750 : "auto",
              // }}
            >
              HELLO
            </Typography>
          </RowBox>
        </LineBox>
      </Stack>
    </>
  );
};

export default About;
