import mongoose from 'mongoose';

interface CachedConnection {
   conn: typeof mongoose | null;
   promise: Promise<typeof mongoose> | null;
}

declare global {
   var mongoose: CachedConnection | undefined;
}

const cached: CachedConnection = (global.mongoose as CachedConnection) || {
   conn: null,
   promise: null,
};

if (!global.mongoose) {
   global.mongoose = cached;
}

export const connectToDB = async (): Promise<typeof mongoose> => {
   const MONGODB_URL = process.env.MONGODB_URL;

   if (!MONGODB_URL) {
      throw new Error('Please define MONGO_URL in your enviroment variables');
   }

   if (cached.conn) {
      console.log('Using existing MongoDB connection');
      return cached.conn;
   }

   mongoose.set('strictQuery', true);

   try {
      if (!cached.promise) {
         cached.promise = mongoose.connect(MONGODB_URL, {
            dbName: process.env.MONGODB_DB_NAME,
         });
      }

      cached.conn = await cached.promise;
      console.log('MongoDB connected Succesfully');

      return cached.conn;
   } catch (error) {
      cached.promise = null;

      throw new Error(
         `Failed to connect to MongoDB: ${
            error instanceof Error ? error.message : String(error)
         }`
      );
   }
};

// For Dev Purposes
export const disconnectFromDB = async (): Promise<void> => {
   if (cached.conn) {
      await mongoose.disconnect();
      cached.conn = null;
      cached.promise = null;
      console.log('MongoDB disconnected');
   }
};
