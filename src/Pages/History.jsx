import React from "react"
import { useNavigate } from "react-router-dom"
import { Box, useMediaQuery } from "@mui/material"
import { Container } from "../Components/Elements"

const History = ({ themeMode }) => {
    const navigate = useNavigate()
    const is740 = useMediaQuery("( min-width: 740px )")
    return (
        <Container sx={{ height: "100%" }}>
            history page
        </Container>
    )
}

export default History