import dotenv from "dotenv";

import mongoDBConnect from "./db/index.js";
dotenv.config({
    path: "./.env"
});

mongoDBConnect();












/*
; (async () => {
    try {
        await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Error: DbConnection", error)
    }
})()
    */