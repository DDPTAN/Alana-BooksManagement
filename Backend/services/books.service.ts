import booksKnex from "../models/books.knex";
import { IBooks } from "../interfaces/interface";

class ServiceBooks {
  constructor() { }

  async getBooks(params?: any) {
    try {
      const data = await booksKnex.getBooks(params); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async getBook(id: string) {
    try {
      const data = await booksKnex.getBook(id); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async createBook(params: IBooks) {
    try {
      const data = await booksKnex.createBook(params); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async updateBook(id: string, params: IBooks) {
    try {
      const data = await booksKnex.updateBook(id, params); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async deleteBook(id: string, params: IBooks) {
    try {
      const data = await booksKnex.deleteBook(id, params); // Knex
      console.log(id, params);
      console.log(data);
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new ServiceBooks();
