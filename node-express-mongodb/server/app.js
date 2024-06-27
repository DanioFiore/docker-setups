const express = require('express');
const connectDB = require('./db');
const helmet = require('helmet');
const ProductsRouter = require('./Routes/ProductsRouter');
const app = express();
app.use(express.json());

connectDB();

// SET SECURITY HEADERS
app.use(helmet());

app.use('/api/v1/products', ProductsRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
});

const port = 3100;
app.listen(port, () => {
    console.log("API server started on port 3100");
})