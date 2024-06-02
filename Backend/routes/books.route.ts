import { Router } from "express";

import ControllerBooks from "../controllers/books.controller";
import Auth from "../middlewares/Auth";
import Media from "../config/media";

class ApiBooks {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get("/", Auth.AuthSuperAndAdmin, ControllerBooks.getBooks);
    this.router.post("/", Auth.AuthSuperAndAdmin, ControllerBooks.createBook);
    this.router.get("/:id", Auth.AuthSuperAndAdmin, ControllerBooks.getBook);
    this.router.put("/:id", Auth.AuthSuperAndAdmin, ControllerBooks.updateBook);
    this.router.delete(
      "/:id",
      Auth.AuthSuperAndAdmin,
      ControllerBooks.deleteBook
    );
    this.router.post(
      "/upload",
      Media.upload.single("picture"),
      Auth.AuthSuperAndAdmin,
      ControllerBooks.upload
    );

    return this.router;
  }
}

export default new ApiBooks();
