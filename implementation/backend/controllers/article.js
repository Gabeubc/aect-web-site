// controllers/articleController.js

const articleModel = require('../models/article');

exports.getAllArticles = (req, res) => {
    const articles = articleModel.getAllArticles();
    res.json(articles);
};

exports.getArticleById = (req, res) => {
    const article = articleModel.getArticleById(parseInt(req.params.id));
    if (article) {
        res.json(article);
    } else {
        res.status(404).json({ message: 'Article not found' });
    }
};

exports.createArticle = (req, res) => {
    const newArticle = articleModel.createArticle(req.body);
    res.status(201).json(newArticle);
};

exports.updateArticle = (req, res) => {
    const updatedArticle = articleModel.updateArticle(parseInt(req.params.id), req.body);
    if (updatedArticle) {
        res.json(updatedArticle);
    } else {
        res.status(404).json({ message: 'Article not found' });
    }
};

exports.deleteArticle = (req, res) => {
    const deletedArticle = articleModel.deleteArticle(parseInt(req.params.id));
    if (deletedArticle) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Article not found' });
    }
};
