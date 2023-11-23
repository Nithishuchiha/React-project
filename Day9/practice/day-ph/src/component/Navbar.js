import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            sx={{
              flexGrow: "1",
              color: "inherit",
              fontSize: "30px",
            }}
          >
            Personal Portfolio
          </Typography>
          <Link to="/home">
            <Button color="inherit"> Home</Button>
          </Link>
          <Link to="/about">
            <Button color="inherit"> About</Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

// export default function Navbar() {
//   return (
//     // <Box sx={{ flexGrow: 1 }}>
//     <AppBar position="static">
//       <Toolbar>
//         {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton> */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           News
//         </Typography>
//         <Button color="inherit">Login</Button>
//       </Toolbar>
//     </AppBar>
//     // {/* </Box> */}
//   );
// }
