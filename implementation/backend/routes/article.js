// routes/articles.js

const express = require('express');
const router = express.Router();
const article = require('../controllers/article');

router.get('', article.getAllArticles);
router.get('/:id', article.getArticleById);
router.post('', article.createArticle);
router.put('/:id', article.updateArticle);
router.delete('/:id', article.deleteArticle);

module.exports = router;
