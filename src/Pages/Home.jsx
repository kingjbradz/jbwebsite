import React from "react"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Container } from "../Components/Elements"

const Home = ({ padding }) => {
  const is530 = useMediaQuery("( min-width: 530px )")
    return (
      <Container sx={{ 
        height: is530 && "100%",
        display: "flex",
        flexDirection: "column",
        padding: padding
        }}>
        <Typography variant="h3" sx={{ marginBottom: 2, textAlign: !is530 && "center" }}>
          JORDAN BRADLEY
        </Typography>
      </Container>
    )
}

export default Home