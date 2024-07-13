import mongoose, { connection } from "mongoose";

// This is us conencting to the mongoDB

export const connectToDB = async () => {
  const conenction = {};

  try {
    if (connection.isConnected) {
      console.log("Already connected to DB");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);
    conenction.db = db.connection[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
   
  }
};
