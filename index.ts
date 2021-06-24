import express, {Application, Request, Response}  from "express";
import dotenv from "dotenv"
import helmet from "helmet"
import cors from "cors";
import router from "./src/routes/index"
dotenv.config();

const app:Application = express();
const port = process.env.PORT || 4001;

app.use(helmet());
app.use(cors());


app.get("/", (req: Request, res:Response) => {
    res.status(200).json({
        message: "Welcome to news blog"
    });
});
app.use('/api/v1/', router);

app.listen(port, (err: any) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on port ${port}`);
})

