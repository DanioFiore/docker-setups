import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hello, World!!' });
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});