import { Router } from "express";
const router = Router();
// Set default API response
router.get("/", (req, res) => {
  res.send("Welcome to Headless MERN CMS");
});

// ------- Article Routes -------

import {
  indexArticles,
  newArticle,
  viewArticleByID,
  updateArticle,
  deleteArticle,
} from "./articlesController.js";

router.route("/articles").get(indexArticles).post(newArticle);

router
  .route("/articles/:article_id")
  .get(viewArticleByID)
  .patch(updateArticle)
  .delete(deleteArticle);

// ------- Comment Routes -------

import {
  indexComments,
  newComment,
  viewCommentByID,
  deleteComment,
} from "./commentController.js";

router
  .route("/articles/:article_id/comment")
  .get(indexComments)
  .post(newComment);

router
  .route("/articles/:article_id/comment/:comment_id")
  .get(viewCommentByID)
  .delete(deleteComment);

// ------- Author Routes -------

import {
  indexAuthors,
  newAuthor,
  viewAuthorByID,
  updateAuthor,
  deleteAuthor,
} from "./authorController.js";

router.route("/authors").get(indexAuthors).post(newAuthor);

router
  .route("/authors/:author_id")
  .get(viewAuthorByID)
  .patch(updateAuthor)
  .delete(deleteAuthor);

router.route("");
// Export API routes
export default router;
