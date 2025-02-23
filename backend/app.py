from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from PIL import Image
from stegano import lsb
import io

app = Flask(__name__)
CORS(app)  # Allow requests from frontend

@app.route("/")
def home():
    return "Flask Server is Running"

@app.route("/encode", methods=["POST"])
def encode():
    if "image" not in request.files or "message" not in request.form:
        return jsonify({"error": "Missing image or message"}), 400

    image = request.files["image"]
    message = request.form["message"]

    img = Image.open(image)
    secret_img = lsb.hide(img, message)

    img_io = io.BytesIO()
    secret_img.save(img_io, format="PNG")
    img_io.seek(0)

    return send_file(img_io, mimetype="image/png")

@app.route("/decode", methods=["POST"])
def decode():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files["image"]
    img = Image.open(image)
    hidden_message = lsb.reveal(img)

    return jsonify({"message": hidden_message})

if __name__ == "__main__":
    app.run(debug=True)
