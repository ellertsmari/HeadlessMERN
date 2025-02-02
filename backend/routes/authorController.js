import { Author } from "../schemas/authorModel.js";

// Handle index actions
export const indexAuthors = (req, res) => {
  Author.find((err, authors) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Authors retrieved successfully",
      data: authors,
    });
  });
};

// Handle create new author
export const newAuthor = (req, res) => {
  const author = new Author();
  author.name = req.body.name;
  author.email = req.body.email;
  author.bio = req.body.bio;

  if (!author.name) {
    return res.status(400).json({
      message: "'name' is required",
    });
  }
  if (!author.email) {
    return res.status(400).json({
      message: "'email' is required",
    });
  } else {
    // save the author and check for errors
    author.save((err) => {
      // Check for validation error
      if (err) res.json(err);
      else
        res.json({
          message: "New author created!",
          data: author,
        });
    });
  }
};

// Handle index author by id
export const viewAuthorByID = (req, res) => {
  Author.findById(req.params.author_id, (err, author) => {
    if (err) res.send(err);
    else
      res.json({
        message: "Loading author",
        data: author,
      });
  });
};

// Handle update author by id
export const updateAuthor = (req, res) => {
  Author.findById(req.params.author_id, (err, author) => {
    if (err) res.send(err);
    author.name = req.body.name ? req.body.name : author.name;
    author.email = req.body.email ? req.body.email : author.email;
    author.bio = req.body.bio ? req.body.bio : author.bio;

    author.save((err) => {
      if (err) res.send(err);
      res.json({
        message: "Author updated",
        data: author,
      });
    });
  });
};

// Handle delete author by id
export const deleteAuthor = (req, res) => {
  Author.deleteOne(
    {
      _id: req.params.author_id,
    },
    (err) => {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Author deleted",
      });
    }
  );
};
