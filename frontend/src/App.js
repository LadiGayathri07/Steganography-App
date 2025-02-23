import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");
  const [encodedImage, setEncodedImage] = useState(null);
  const [decodedMessage, setDecodedMessage] = useState("");

  // Handle image selection and show preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Generate image preview
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleEncode = async () => {
    if (!selectedImage || !message) {
      alert("Please select an image and enter a message.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("message", message);

    try {
      const response = await axios.post("http://127.0.0.1:5000/encode", formData, {
        responseType: "blob",
      });

      const imageUrl = URL.createObjectURL(response.data);
      setEncodedImage(imageUrl);
    } catch (error) {
      console.error("Encoding error:", error);
      alert("Error encoding image.");
    }
  };

  const handleDecode = async () => {
    if (!selectedImage) {
      alert("Please select an image to decode.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios.post("http://127.0.0.1:5000/decode", formData);
      setDecodedMessage(response.data.message);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Decoding error:", error);
      alert("Error decoding image.");
    }
  };

  // Handle image download
  const handleDownload = () => {
    if (encodedImage) {
      const link = document.createElement("a");
      link.href = encodedImage;
      link.download = "encoded_image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <h1 className="main-heading">🔒 Image Steganography</h1>
      <div className="container">
        <h2>Securely Hide & Reveal Secret Messages in Images</h2>

        {/* Image Preview (Before Encoding/Decoding) */}
        {imagePreview && (
          <div>
            <h3 style={{ fontSize: "1rem", marginBottom: "10px" }}>🖼️ Image Preview</h3>
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
                marginBottom: "10px",
              }}
            />
          </div>
        )}

        <input type="file" accept="image/*" onChange={handleImageChange} />
        <textarea
          placeholder="Enter your secret message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="3"
        />

        <div className="buttons">
          <button className="encode-btn" onClick={handleEncode}>Encode</button>
          <button className="decode-btn" onClick={handleDecode}>Decode</button>
        </div>

        {encodedImage && (
          <div className="result">
            <h2>🔒 Encoded Image</h2>
            <img src={encodedImage} alt="Encoded" />
            <p>Click to save the encoded image.</p>

            {/* New Download Button for Encoded Images */}
            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                transition: "0.3s ease",
              }}
              onClick={handleDownload}
            >
              ⬇ Download Image
            </button>
          </div>
        )}

        {decodedMessage && (
          <div className="result">
            <h2>🔓 Decoded Message</h2>
            <p className="message-box">{decodedMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
