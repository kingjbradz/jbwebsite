import { Box } from "@mui/material"
import { styled } from "@mui/system"

export const Container = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

export const LineBox = styled(Box)( ({ theme }) => ({
  justifyContent: "space-evenly",
  padding: "16px",
  flexDirection: "column",
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "24px",
}));

export const RowBox = styled(Box)({
  textAlign: "left",
  justifyContent: "center",
  alignItems: "center",
});