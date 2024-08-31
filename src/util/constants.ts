import { config } from "dotenv";

config();

class Parameter {
    static readonly DB_NAME = process.env.DB_NAME || "test";
    static readonly DB_PORT = process.env.DB_PORT || "test";
    static readonly DB_HOST = process.env.DB_HOST || "test";
}

export { Parameter}