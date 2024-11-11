// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Icon } from "@iconify/react";
// import {
//   IconButton,
//   Box,
//   useTheme,
//   Button,
//   useMediaQuery,
// } from "@mui/material";

// const SocialLinks = () => {
//   const is950 = useMediaQuery("( min-width: 950px )");
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const location = useLocation();
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: is950 ? "row-reverse" : "column",
//       }}
//     >
//       <Button
//         onClick={() => navigate("/impressum")}
//         sx={{
//           color:
//             location.pathname === "/impressum"
//               ? "brand.logogrey"
//               : "brand.primary",
//           borderRadius: 0,
//           fontWeight: 400,
//           fontSize: is950 && "10px",
//           padding: is950 && 0,
//           marginTop: !is950 && 1,
//         }}
//       >
//         IMPRESSUM
//       </Button>
//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         <IconButton
//           onClick={() =>
//             window.open(
//               "https://www.instagram.com/doneproperlyberlin/",
//               "_blank"
//             )
//           }
//         >
//           <Icon icon="mdi:instagram" color={theme.palette.brand.primary} />
//         </IconButton>
//         <IconButton
//           onClick={() =>
//             window.open("https://youtube.com/@doneproperlyberlin", "_blank")
//           }
//         >
//           <Icon icon="mdi:youtube" color={theme.palette.brand.primary} />
//         </IconButton>
//         <IconButton
//           onClick={() =>
//             window.open("https://soundcloud.com/doneproperlyberlin", "_blank")
//           }
//         >
//           <Icon icon="mdi:soundcloud" color={theme.palette.brand.primary} />
//         </IconButton>
//         <IconButton
//           onClick={() =>
//             window.open("https://t.me/doneproperlyberlin", "_blank")
//           }
//         >
//           <Icon icon="mdi:telegram" color={theme.palette.brand.primary} />
//         </IconButton>
//         <IconButton
//           onClick={() =>
//             window.open("http://doneproperly.berlin/newsletter", "_blank")
//           }
//         >
//           <Icon icon="uiw:mail" color={theme.palette.brand.primary} />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default SocialLinks;
