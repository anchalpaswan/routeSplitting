import mongoose from "mongoose";

export const connection =() => mongoose
    .connect(process.env.MONGO_URL ,{
        dbName: 'backendAPI',
    })
    .then(() => console.log('database connected'))
    .catch((e) => console.log(e));
