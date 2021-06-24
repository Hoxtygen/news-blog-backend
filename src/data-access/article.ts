const db = require("../database/dbConfig");

class ArticleDataAccess {
	static getArticles() {
		return db("articles");
	}

	static getArticleById(id:string) {
		return db("articles").where({id}).first();
	}
}







export default ArticleDataAccess;