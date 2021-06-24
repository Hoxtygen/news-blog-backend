import ArticleService from "../service/article";
import { Request, Response } from 'express';



class ArticlesController {
    static async getArticles(req: Request, res: Response) {
        try {
            const articles = await ArticleService.getArticles();
            return res.status(200).json({
                status: 200,
                message: "Request successful",
                articles
            });
        } catch (error) {
            return res.status(400).json({
                message: "Error fetching articles",
                error
            })
        }
    }

    
}

export default ArticlesController