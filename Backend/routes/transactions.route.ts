import { Router } from "express";

import ControllerTransactions from "../controllers/transactions.controller";
import Auth from "../middlewares/Auth";

class ApiTransactions {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  routes() {
    this.router.get("/", Auth.Auth, ControllerTransactions.getTransactions);
    this.router.post("/", Auth.Auth, ControllerTransactions.createTransaction);
    this.router.get("/:id", Auth.Auth, ControllerTransactions.getTransaction);
    this.router.put("/:id", Auth.Auth, ControllerTransactions.updateTransaction);
    this.router.delete("/:id", Auth.Auth, ControllerTransactions.deleteTransaction);

    return this.router;
  }
}

export default new ApiTransactions();
