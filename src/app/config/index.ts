import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
    default_password: process.env.DEFAULT_PASS,
}