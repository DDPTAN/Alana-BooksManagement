import { Router } from "express";

import ControllerBorrowings from "../controllers/borrowings.controller";
import Auth from "../middlewares/Auth";

class ApiBorrowings {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get("/", Auth.Auth, ControllerBorrowings.getBorrowings);
    this.router.post("/", Auth.Auth, ControllerBorrowings.createBorrowing);
    this.router.get("/:id", Auth.Auth, ControllerBorrowings.getBorrowing);
    this.router.put("/:id", Auth.Auth, ControllerBorrowings.updateBorrowing);
    this.router.delete("/:id", Auth.Auth, ControllerBorrowings.deleteBorrowing);

    return this.router;
  }
}

export default new ApiBorrowings();
