import ArticleDataAccess from "../data-access/article";

class ArticleService {
    static async getArticles() {
        return await ArticleDataAccess.getArticles();
    }

    
}


export default ArticleService

//handle request body validation here


