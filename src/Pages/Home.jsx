import React from "react"
import Typography from "@mui/material/Typography"
import { Container } from "../Components/Elements"

const Home = () => {
    return (
      <Container sx={{ 
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        }}>
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          JORDAN BRADLEY
        </Typography>
      </Container>
    )
}

export default Home