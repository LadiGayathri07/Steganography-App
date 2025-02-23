import React, { useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Typography } from "@mui/material";

function Decode() {
  const [file, setFile] = useState(null);
  const [hiddenText, setHiddenText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post("http://127.0.0.1:5000/decode", formData);
    setHiddenText(response.data.text);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto", padding: "20px", textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">🔎 Extract Hidden Text</Typography>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} style={{ marginTop: "10px" }} />
        <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ marginTop: "10px" }}>
          Decode 🔓
        </Button>
        {hiddenText && (
          <Typography variant="body1" sx={{ marginTop: "10px", fontWeight: "bold", color: "green" }}>
            Hidden Text: {hiddenText}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default Decode;
