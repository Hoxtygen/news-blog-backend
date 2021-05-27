import express, {Application, Request, Response}  from "express";
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors";
dotenv.config();

const app:Application = express();

app.use(helmet());
app.use(cors());




const port = process.env.PORT || 4001;
app.get("/", (req: Request, res:Response) => {
    res.status(200).json({
        message: "Welcome to news blog"
    });
});

app.listen(port, (err: any) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on port ${port}`);
})