import { Request, Response } from "express";

export type Login = {
  username: string;
  password: string;
};

export interface IUser {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  gender?: string;
  age?: number;
  contact?: string;
  role?: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserModel<T> {
  getUsers: () => void;
  getUser: (id: string) => void;
  createUser: (params: T) => void;
  updateUser: (id: string, params: T) => void;
  deleteUser: (id: string) => void;
}

export interface UserController {
  getUsers: (req: Request, res: Response) => void;
  getUser: (req: Request, res: Response) => void;
  getCurrentUser: (req: Request, res: Response) => void;
  createUserMember: (req: Request, res: Response) => void;
  createUserAdmin: (req: Request, res: Response) => void;
  updateUser: (req: Request, res: Response) => void;
  deleteUser: (req: Request, res: Response) => void;
}

export interface IBooks {
  id?: string;
  title?: string;
  genre?: string;
  publisher?: string;
  author?: string;
  book_number?: number;
  publication_date?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface BookModel<T> {
  getBooks: () => void;
  getBook: (id: string) => void;
  createBook: (params: T) => void;
  updateBook: (id: string, params: T) => void;
  deleteBook: (id: string) => void;
}

export interface BookController {
  getBooks: (req: Request, res: Response) => void;
  getBook: (req: Request, res: Response) => void;
  createBook: (req: Request, res: Response) => void;
  updateBook: (req: Request, res: Response) => void;
  deleteBook: (req: Request, res: Response) => void;
}

export interface IBorrowings {
  id?: string;
  book_id?: string;
  user_id?: string;
  date_borrowed?: string;
  date_returned?: string;
  created_at?: string;
  updated_at?: string;
}

export interface BorrowingModel<T> {
  getBorrowings: () => void;
  getBorrowing: (id: string) => void;
  createBorrowing: (params: T) => void;
  updateBorrowing: (id: string, params: T) => void;
  deleteBorrowing: (id: string) => void;
}

export interface BorrowingController {
  getBorrowings: (req: Request, res: Response) => void;
  getBorrowing: (req: Request, res: Response) => void;
  createBorrowing: (req: Request, res: Response) => void;
  updateBorrowing: (req: Request, res: Response) => void;
  deleteBorrowing: (req: Request, res: Response) => void;
}

export interface ITransactions {
  id?: string;
  borrowing_id?: string;
  book_id?: string;
  user_id?: string;
  trans_date?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

export interface TransactionModel<T> {
  getTransactions: () => void;
  getTransaction: (id: string) => void;
  createTransaction: (params: T) => void;
  updateTransaction: (id: string, params: T) => void;
  deleteTransaction: (id: string) => void;
}

export interface TransactionController {
  getTransactions: (req: Request, res: Response) => void;
  getTransaction: (req: Request, res: Response) => void;
  createTransaction: (req: Request, res: Response) => void;
  updateTransaction: (req: Request, res: Response) => void;
  deleteTransaction: (req: Request, res: Response) => void;
}