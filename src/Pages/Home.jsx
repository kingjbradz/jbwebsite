import React from "react"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { Container } from "../Components/Elements"

const Home = () => {
    const is530 = useMediaQuery("(min-width: 530px)")
    return (
      <Container sx={{ 
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        }}>
        <Typography variant="h3" sx={{ marginBottom: 2, textAlign: !is530 && "center" }}>
          JORDAN BRADLEY
        </Typography>
      </Container>
    )
}

export default Home