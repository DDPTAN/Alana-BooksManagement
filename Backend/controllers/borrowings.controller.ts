import { Request, Response } from "express";

import ServiceBorrowings from "../services/borrowings.service";
import { IBorrowings, BorrowingController } from "../interfaces/interface";

interface AuthenticatedRequest extends Request {
  user?: any; // Adjust the type according to your decoded user type
}

class ControllerBorrowings implements BorrowingController {
  constructor() { }

  async getBorrowings(req: Request, res: Response) {
    try {
      const borrowings = (await ServiceBorrowings.getBorrowings()) as IBorrowings[];

      if (borrowings.length === 0) {
        res.status(404).json({
          message: "Data Not Found!",
        });
      } else {
        res.status(200).json({
          message: "Success Get Data!",
          data: borrowings,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async getBorrowing(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const borrowing = (await ServiceBorrowings.getBorrowing(id)) as IBorrowings[];

      if (borrowing.length === 0) {
        res.status(404).json({
          message: "Data Not Found!",
        });
      } else {
        res.status(200).json({
          message: "Success Get Data!",
          data: borrowing,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async createBorrowing(req: Request, res: Response) {
    try {
      const params: IBorrowings = {
        book_id: req.body.book_id,
        user_id: (req as AuthenticatedRequest).user.id,
        date_borrowed: req.body.date_borrowed,
        date_returned: req.body.date_returned,
      };

      const borrowing = (await ServiceBorrowings.createBorrowing(params)) as IBorrowings;

      res.status(200).json({
        message: "Success Create Data!",
        data: borrowing,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async updateBorrowing(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const params: IBorrowings = {
        date_returned: req.body.date_returned,
      };

      const borrowing = (await ServiceBorrowings.updateBorrowing(id, params)) as IBorrowings;

      res.status(200).json({
        message: "Success Update Data!",
        data: borrowing,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async deleteBorrowing(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const borrowing = (await ServiceBorrowings.deleteBorrowing(id).then((data) => {
        if (data === 1) {
          res.status(200).json({
            message: "Success Delete Data!",
          });
        } else {
          res.status(404).json({
            message: "Data Not Found!",
          });
        }
      })) as IBorrowings;
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }
}

export default new ControllerBorrowings();
