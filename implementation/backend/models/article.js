// models/articleModel.js

const articles = [
    { id: 1, title: 'First Article', content: 'Content of the first article', categoryId: 1 },
    { id: 2, title: 'Second Article', content: 'Content of the second article', categoryId: 1 },
];

let nextId = 3;

// move logic to services and integrate db ( FIREBASE )
function createArticle(article) {
    const newArticle = { id: nextId++, ...article };
    articles.push(newArticle);
    return newArticle;
}

function getAllArticles() {
    return articles;
}

function getArticleById(id) {
    return articles.find(article => article.id === id);
}

function updateArticle(id, updatedArticle) {
    const index = articles.findIndex(article => article.id === id);
    if (index !== -1) {
        articles[index] = { id, ...updatedArticle };
        return articles[index];
    }
    return null;
}

function deleteArticle(id) {
    const index = articles.findIndex(article => article.id === id);
    if (index !== -1) {
        return articles.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle
};
