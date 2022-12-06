import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
// ${USERNAME}:${PASSWORD}


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const  Connection = async ()=>{
    const URL= `mongodb://${USERNAME}:${PASSWORD}@ac-ghdcuik-shard-00-00.6s6oazx.mongodb.net:27017,ac-ghdcuik-shard-00-01.6s6oazx.mongodb.net:27017,ac-ghdcuik-shard-00-02.6s6oazx.mongodb.net:27017/?ssl=true&replicaSet=atlas-3u0sf9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true});
        console.log('Databse connected successfully');

    }catch(error){
        console.log('Error while connecting with databae', error.message);
    }
    
}

export default Connection;