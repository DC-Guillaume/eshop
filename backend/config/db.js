import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(
      `MongoDB connecté: ${conn.connection.host}`.brightCyan.underline.bold
    );
  } catch (error) {
    console.error(`Erreur: ${error.message}`.brightRed.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
