const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  Tag.findByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
  // be sure to include its associated Product data
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
