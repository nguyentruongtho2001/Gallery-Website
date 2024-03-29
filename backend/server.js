require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer"); // upload
const cloudinary = require("cloudinary").v2;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = 2909;

app.get("/api", (req, res) => {
  console.log("hi");
});

//multer setting
const ALLOWED_FORMATS = ["image/jpeg", "image/png", "image/jpg"];
//Use memoryStorage for multer upload
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOWED_FORMATS.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(" Not support file type"), false);
    }
  },
});

const singleUpload = upload.single("file");
const singleUploadControl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({
        message: "Image upload file",
      });
    }
    next();
  });
};

// use datauri to stream buffee
const DatauriParser = require("datauri/parser");
const parser = new DatauriParser();
const path = require("path");
const formatBuffer = (file) => {
  return parser.format(
    path.extname(file.originalname).toString().toLowerCase(),
    file.buffer
  );
};

// Setting cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

cloudinaryUpload = (file) =>
  cloudinary.uploader.upload(file, {
    upload_preset: process.env.UPLOAD_PRESET,
  });

//upload API
app.post("/api/upload", singleUploadControl, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(422).send({
        message: "There is error when uploading",
      });
    }
    //Convert to stream to base64
    const file64 = formatBuffer(req.file);
    const uploadResult = await cloudinaryUpload(file64.content);
    return res.status(200).json({
      cloudinaryId: uploadResult.public_id,
      url: uploadResult.secure_url,
      message: "Upload Success",
    });
  } catch (error) {
    return res.status(422).send({
      message: error.message,
    });
  }
});
app.listen(port, () => {
  console.log("Port is running on: ", port);
});
