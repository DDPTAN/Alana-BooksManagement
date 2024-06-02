import borrowingsKnex from "../models/borrowings.knex";
import { IBorrowings } from "../interfaces/interface";

class ServiceBorrowings {
  constructor() { }

  async getBorrowings() {
    try {
      const data = await borrowingsKnex.getBorrowings(); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async getBorrowing(id: string) {
    try {
      const data = await borrowingsKnex.getBorrowing(id); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async createBorrowing(params: IBorrowings) {
    try {
      const data = await borrowingsKnex.createBorrowing(params); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async updateBorrowing(id: string, params: IBorrowings) {
    try {
      const data = await borrowingsKnex.updateBorrowing(id, params); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async deleteBorrowing(id: string) {
    try {
      const data = await borrowingsKnex.deleteBorrowing(id); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new ServiceBorrowings();
