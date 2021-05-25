import express from "express";

const app = express();
const port = 3000;
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