// const express = require("express");
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingsRouter from "./routes/booking-routes";
import cors from 'cors';
dotenv.config();

const app = express();
// const cors = require('cors');
app.use(cors());

//middlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.vwxutru.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>app.listen(5000, () =>
    console.log(`Connected to Database and Server Port is Running`)
    )
)
.catch((e) => console.log(e));
