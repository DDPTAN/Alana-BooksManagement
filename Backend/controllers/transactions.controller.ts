import { Request, Response } from "express";

import ServiceTransactions from "../services/transactionss.service";
import { ITransactions, TransactionController } from "../interfaces/interface";

interface AuthenticatedRequest extends Request {
  user?: any; // Adjust the type according to your decoded user type
}

class ControllerTransactions implements TransactionController {
  constructor() { }

  async getTransactions(req: Request, res: Response) {
    try {
      const transactions = await ServiceTransactions.getTransactions();
      res.status(200).json({
        message: "Success Get Data!",
        data: transactions,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async getTransaction(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const transaction = await ServiceTransactions.getTransaction(id);
      res.status(200).json({
        message: "Success Get Data!",
        data: transaction,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async createTransaction(req: Request, res: Response) {
    try {
      const params: ITransactions = {
        borrowing_id: req.body.borrowing_id,
        book_id: req.body.book_id,
        user_id: (req as AuthenticatedRequest).user.id,
        trans_date: req.body.trans_date,
        status: req.body.status,
      };

      const transaction = (await ServiceTransactions.createTransaction(params)) as ITransactions;

      res.status(200).json({
        message: "Success Create Data!",
        data: transaction,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async updateTransaction(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const params: ITransactions = {
        status: req.body.status,
      };

      const transaction = (await ServiceTransactions.updateTransaction(id, params)) as ITransactions;

      res.status(200).json({
        message: "Success Update Data!",
        data: transaction,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async deleteTransaction(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const transaction = await ServiceTransactions.deleteTransaction(id);
      res.status(200).json({
        message: "Success Delete Data!",
        data: transaction,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }
}

export default new ControllerTransactions();
