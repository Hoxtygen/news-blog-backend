import express from "express";
import ArticlesController from "../controllers/articlesController";
const router = express.Router();


router.get("/articles", ArticlesController.getArticles);

export default router