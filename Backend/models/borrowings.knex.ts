import knex from "../database/knex/knex";

import { IBorrowings, BorrowingModel } from "../interfaces/interface";

class Borrowings implements BorrowingModel<IBorrowings> {
  private borrowings;
  constructor() {
    this.borrowings = knex;
  }

  async getBorrowings() {
    try {
      const result = await this.borrowings("borrowings").select("*");
      return result;
    } catch (error) {
      return error;
    }
  }

  async getBorrowing(id: string) {
    try {
      const result = await this.borrowings("borrowings").where("id", "=", id);
      return result;
    } catch (error) {
      return error;
    }
  }

  async createBorrowing(params: IBorrowings) {
    try {
      const result = await this.borrowings("borrowings").insert(params).returning("*");
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateBorrowing(id: string, params: IBorrowings) {
    try {
      const result = await this.borrowings("borrowings")
        .where("id", "=", id)
        .update(params)
        .returning("*");
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteBorrowing(id: string) {
    try {
      const result = await this.borrowings("borrowings").where("id", "=", id).del();
      return result;
    } catch (error) {
      return error;
    }
  }
}

export default new Borrowings();
