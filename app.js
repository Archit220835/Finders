import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app =express();

//to Link router configuration in app.js
import userRouter from './router/user.router.js';
import categoryRouter from './router/category.router.js';
import subcategoryRouter from './router/subcategory.router.js';

//to extract a body from url body :(body praser is used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to resolve crpss origin resource sharing
app.use(cors());

//To configure fileupload to extract a binary data from body
app.use(fileUpload());

//Application level middlewares
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory",subcategoryRouter);

app.listen(3001);
console.log("Server LIsten at Link: http://localhost:3001");


