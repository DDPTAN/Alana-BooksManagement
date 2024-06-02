import transactionsKnex from "../models/transactions.knex";
import { ITransactions } from "../interfaces/interface";

class ServiceTransactions {
  constructor() { }

  async getTransactions() {
    try {
      const data = await transactionsKnex.getTransactions(); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async getTransaction(id: string) {
    try {
      const data = await transactionsKnex.getTransaction(id); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async createTransaction(params: ITransactions) {
    try {
      const data = await transactionsKnex.createTransaction(params); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async updateTransaction(id: string, params: ITransactions) {
    try {
      const data = await transactionsKnex.updateTransaction(id, params); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }

  async deleteTransaction(id: string) {
    try {
      const data = await transactionsKnex.deleteTransaction(id); // Knex
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new ServiceTransactions();
