import jwt from "jsonwebtoken";
import userModel from "../model/model.user.js";

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.split(" ")[0] === "JWT") {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "secretKey", (err, verifiedToken) => {
      if (err) {
        return res.status(403).json({ message: "invalid JWT token" });
      }

      userModel.findById(verifiedToken.data)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
}
