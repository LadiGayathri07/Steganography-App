import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Card, CardContent, Typography } from "@mui/material";

function Encode() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("message", message);

    const response = await axios.post("http://127.0.0.1:5000/encode", formData);
    alert(response.data.message);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto", padding: "20px", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">🖼 Hide Text in Image</Typography>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ marginTop: "10px" }} />
        <TextField
          fullWidth
          label="Enter Secret Message"
          variant="outlined"
          margin="normal"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ marginTop: "10px" }}>
          Encode 🔐
        </Button>
      </CardContent>
    </Card>
  );
}

export default Encode;
