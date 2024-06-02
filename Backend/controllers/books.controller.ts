import { Request, Response } from "express";

import ServiceBooks from "../services/books.service";
import Media from "../config/media";
import { IBooks, BookController } from "../interfaces/interface";

interface AuthenticatedRequest extends Request {
  user?: any; // Adjust the type according to your decoded user type
}

class ControllerBooks implements BookController {
  constructor() { }

  async getBooks(req: Request, res: Response) {
    try {
      const query = req.query as any;
      const books = (await ServiceBooks.getBooks(query)) as any;
      const totalPages = Math.floor(books.total / Number(query?.size ?? 10)) + 1;

      if (books.length === 0) {
        res.status(404).json({
          message: "Data Not Found!",
        });
      } else {
        res.status(200).json({
          message: "Success Get Data!",
          data: books,
          meta: {
            page: query?.page ? Number(query?.page) : 1,
            size: query?.size ? Number(query?.size) : 10,
            totalData: books.total,
            totalPages,
          },
        });
      }
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async getBook(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const book = (await ServiceBooks.getBook(id)) as IBooks[];

      if (book.length === 0) {
        res.status(404).json({
          message: "Data Not Found!",
        });
      } else {
        res.status(200).json({
          message: "Success Get Data!",
          data: book,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async createBook(req: Request, res: Response) {
    try {
      const params: IBooks = {
        title: req.body.title,
        genre: req.body.genre,
        publisher: req.body.publisher,
        author: req.body.author,
        book_number: req.body.book_number,
        publication_date: req.body.publication_date,
        status: req.body.status,
      };

      const book = (await ServiceBooks.createBook(params)) as IBooks;

      res.status(200).json({
        message: "Success Create Data!",
        data: book,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async updateBook(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const params: IBooks = {
        title: req.body.title,
        genre: req.body.genre,
        publisher: req.body.publisher,
        author: req.body.author,
        book_number: req.body.book_number,
        publication_date: req.body.publication_date,
        status: req.body.status,
      };

      const book = (await ServiceBooks.updateBook(id, params)) as IBooks;

      res.status(200).json({
        message: "Success Update Data!",
        data: book,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async deleteBook(req: Request, res: Response) {
    const { id } = req.params;
    const params: IBooks = {
      status: "deleted",
    };
    try {
      const book = (await ServiceBooks.deleteBook(id, params).then((data) => {
        if (data) {
          res.status(200).json({
            message: "Success Delete Data!",
            data: data,
          });
        } else {
          res.status(404).json({
            message: "Data Not Found!",
          });
        }
      })) as IBooks;
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }

  async upload(req: Request, res: Response) {
    if (!req.file || !req.file.buffer) {
      throw new Error("File buffer is undefined");
    }

    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;

    try {
      const pictureUrl = await Media.storage.uploader.upload(file);

      const picture = (await pictureUrl).url;

      res.status(200).json({
        message: "Success Upload Picture!",
        data: picture,
      });
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  }
}

export default new ControllerBooks();
