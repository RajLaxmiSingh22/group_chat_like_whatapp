 import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
 dotenv.config();

 const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
       dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.PG_PORT,
    logging: false
 }) 

 const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
connectDB();
export default sequelize;