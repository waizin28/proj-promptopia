import mongoose from "mongoose";

let isConnected = false; //will allow us to track connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); //to supress error messages

  if (isConnected) {
    console.log("Mongodb is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};
