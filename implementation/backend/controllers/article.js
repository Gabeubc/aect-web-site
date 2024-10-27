// controllers/articleController.js

const article = require('../models/article');

exports.getAllArticles = (req, res) => {
    const articles = article.getAllArticles();
    res.json(articles);
};

exports.getArticleById = (req, res) => {
    const article = article.getArticleById(parseInt(req.params.id));
    if (article) {
        res.json(article);
    } else {
        res.status(404).json({ message: 'Article not found' });
    }
};

exports.createArticle = (req, res) => {
    const newArticle = article.createArticle(req.body);
    res.status(201).json(newArticle);
};

exports.updateArticle = (req, res) => {
    const updatedArticle = article.updateArticle(parseInt(req.params.id), req.body);
    if (updatedArticle) {
        res.json(updatedArticle);
    } else {
        res.status(404).json({ message: 'Article not found' });
    }
};

exports.deleteArticle = (req, res) => {
    const deletedArticle = article.deleteArticle(parseInt(req.params.id));
    if (deletedArticle) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Article not found' });
    }
};
