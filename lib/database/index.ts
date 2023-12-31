import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

// initializing a cached variable to hold cached connection to a database
let cached = (global as any).mongoose || {conn:null, promise:null}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is missign')

    // cached.promise(connecting to cached connection) dbName an bufferCommand
    // to create new connection
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'learner',
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}