import { Pool, PoolClient } from "pg";
import { env } from "../../env";

const CONFIG = {
  host:env.POSTGRES_HOST,
  port:env.POSTGRES_PORT,
  user:env.POSTGRES_USER,
  password:env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB
};

class Database {
  private pool: Pool;
  private client: PoolClient | undefined;

  constructor() {
    this.pool = new Pool(CONFIG);
    this.connect();
  }

  private async connect() {
    try {
      this.client = await this.pool.connect();
    } catch (error) {
      console.error(`Error connecting to the database: ${error}`);
      throw new Error(`Error connecting to the database: ${error}`);
    }
  }

  get clientInstance() {
    return this.client;
  }
}

export const database = new Database();
