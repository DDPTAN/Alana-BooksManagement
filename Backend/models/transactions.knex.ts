import knex from "../database/knex/knex";

import { ITransactions, TransactionModel } from "../interfaces/interface";

class Transactions implements TransactionModel<ITransactions> {
  private transactions;
  constructor() {
    this.transactions = knex;
  }

  async getTransactions() {
    try {
      const result = await this.transactions("transactions").select("*");
      return result;
    } catch (error) {
      return error;
    }
  }

  async getTransaction(id: string) {
    try {
      const result = await this.transactions("transactions").where("id", "=", id);
      return result;
    } catch (error) {
      return error;
    }
  }

  async createTransaction(params: ITransactions) {
    try {
      const result = await this.transactions("transactions").insert(params).returning("*");
      return result;
    } catch (error) {
      return error;
    }
  }

  async updateTransaction(id: string, params: ITransactions) {
    try {
      const result = await this.transactions("transactions")
        .where("id", "=", id)
        .update(params)
        .returning("*");
      return result;
    } catch (error) {
      return error;
    }
  }

  async deleteTransaction(id: string) {
    try {
      const result = await this.transactions("transactions").where("id", "=", id).del();
      return result;
    } catch (error) {
      return error;
    }
  }
}

export default new Transactions();
