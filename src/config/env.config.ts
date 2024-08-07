import dotenv from 'dotenv';
dotenv.config();

export const env = {
    BINGX_API_KEY: process.env.BINGX_API_KEY,
    BINGX_API_SECRET: process.env.BINGX_API_SECRET
};
