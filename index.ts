import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express();
const port = process.env.PORT || 4001;
app.get("/", (req: Request, res) => {
    res.status(200).json({
        message: "Welcome to news blog"
    });
});

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on port ${port}`);
})