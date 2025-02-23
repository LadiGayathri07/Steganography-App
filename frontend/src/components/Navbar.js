import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: "#2196F3" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          🔒 Image Steganography
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
