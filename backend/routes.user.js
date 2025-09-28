import { register } from "../controller/controller.user.js";
import { login } from "../controller/controller.user.js";
import { verifyToken } from "../middleware/verifyToken.js";

export function useRoutes(app) {
  app.post("/api/register", register);
  app.post("/api/login", login);
  app.get("/api/profile", verifyToken, (req, res) => {
    res.json({ message: "Welcome", user: req.user });
  });
}
