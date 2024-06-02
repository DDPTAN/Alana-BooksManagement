import knex from "../database/knex/knex";

import { IBooks, BookModel } from "../interfaces/interface";

class Books implements BookModel<IBooks> {
  private books;
  constructor() {
    this.books = knex;
  }

  async getBooks(params?: any) {
    const size = params?.size ? Number(params?.size) : 10;
    const page = params?.page ? Number(params?.page) - 1 : 0;
    try {
      // const data = (await this.books
      //   .select("*")
      //   .limit(size)
      //   .offset(page * size)
      //   .from("books")
      //   .where("status", "=", "available")
      //   .where("available", "=", true)
      //   .orderBy("created_at", "desc")) as any;

      const data = (await this.books
        .select("*")
        .limit(size)
        .offset(page * size)
        .from("books")
        .where("status", "=", "available")) as any;

      return data;
    } catch (error) {
      return error;
    }
  }

  async getBook(id: string) {
    try {
      const data = await this.books
        .select("*")
        .from("books")
        .where("id", "=", id);
      return data[0];
    } catch (error) {
      return error;
    }
  }

  async createBook(params: IBooks) {
    try {
      const result = await this.books("books").insert(params).returning("*");
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateBook(id: string, params: IBooks) {
    try {
      const result = await this.books("books")
        .where("id", "=", id)
        .update(params)
        .returning("*");
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteBook(id: string) {
    try {
      const result = await this.books("books").where("id", "=", id).del();
      return result;
    } catch (error) {
      return error;
    }
  }
}

export default new Books();
